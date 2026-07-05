import json
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

workbook_path = Path('订单数据整理_含图片.xlsx')
output_path = Path('orders-data.json')
image_dir = Path('assets/images')

if not workbook_path.exists():
    raise FileNotFoundError(workbook_path)


def clean_text(value):
    if value is None:
        return ''
    return str(value).strip()


def parse_money(value):
    text = clean_text(value).replace('¥', '').replace(',', '').strip()
    try:
        return float(text)
    except ValueError:
        return 0


def parse_int(value):
    text = clean_text(value).replace(',', '').strip()
    try:
        return int(float(text))
    except ValueError:
        return 1


def resolve_image_path(order_id):
    if not order_id:
        return ''
    candidates = [
        f'assets/images/{order_id}.jpg',
        f'assets/images/{order_id}.png',
        f'assets/images/{order_id}.jpeg',
        f'assets/images/{order_id}.webp',
    ]
    for candidate in candidates:
        if (Path(candidate)).exists():
            return candidate
    return ''


with zipfile.ZipFile(workbook_path) as z:
    ns = {'a': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}

    shared_strings = []
    if 'xl/sharedStrings.xml' in z.namelist():
        sst_root = ET.fromstring(z.read('xl/sharedStrings.xml'))
        for si in sst_root.findall('a:si', ns):
            texts = []
            for t in si.iterfind('.//a:t', ns):
                texts.append(t.text or '')
            shared_strings.append(''.join(texts))

    workbook_xml = ET.fromstring(z.read('xl/workbook.xml'))
    rels_xml = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
    rels = {rel.attrib['Id']: rel.attrib['Target'] for rel in rels_xml.findall('{http://schemas.openxmlformats.org/package/2006/relationships}Relationship')}

    first_sheet = workbook_xml.find('{http://schemas.openxmlformats.org/spreadsheetml/2006/main}sheets')[0]
    r_id = first_sheet.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']
    sheet_path = rels[r_id]
    if sheet_path.startswith('/'):
        sheet_path = sheet_path[1:]
    if not sheet_path.startswith('xl/'):
        sheet_path = f'xl/{sheet_path}'
    sheet_root = ET.fromstring(z.read(sheet_path.replace('\\', '/')))

    rows = []
    for row in sheet_root.findall('.//a:sheetData/a:row', ns):
        values = []
        for cell in row.findall('a:c', ns):
            cell_type = cell.attrib.get('t')
            cell_value = ''
            if cell_type == 's':
                v = cell.find('a:v', ns)
                if v is not None and v.text is not None:
                    try:
                        cell_value = shared_strings[int(v.text)]
                    except (ValueError, IndexError):
                        cell_value = v.text
            elif cell_type == 'inlineStr':
                text_nodes = cell.findall('.//a:t', ns)
                if text_nodes:
                    cell_value = ''.join(t.text or '' for t in text_nodes)
            else:
                v = cell.find('a:v', ns)
                if v is not None and v.text is not None:
                    cell_value = v.text
            values.append(cell_value)
        rows.append(values)

    if not rows:
        raise ValueError('No rows found in workbook')

    headers = [clean_text(value) for value in rows[0]]
    records = []
    for row_values in rows[1:]:
        if not any(clean_text(value) for value in row_values):
            continue
        row_data = {}
        for index, header in enumerate(headers):
            row_data[header] = row_values[index] if index < len(row_values) else ''
        order_id = clean_text(row_data.get('订单ID', ''))
        records.append({
            'id': order_id,
            'orderNo': clean_text(row_data.get('订单号', '')),
            'status': clean_text(row_data.get('订单状态', '')),
            'recipient': clean_text(row_data.get('收件人姓名', '')),
            'phone': clean_text(row_data.get('收件人电话', '')),
            'address': clean_text(row_data.get('收货地址', '')),
            'expressCompany': clean_text(row_data.get('快递公司', '')),
            'expressNo': clean_text(row_data.get('快递单号', '')),
            'shop': clean_text(row_data.get('店铺名称', '')),
            'productName': clean_text(row_data.get('商品名称', '')),
            'description': clean_text(row_data.get('商品描述', '')),
            'image': resolve_image_path(order_id) or clean_text(row_data.get('商品图片', '')),
            'spec': clean_text(row_data.get('商品规格', '')),
            'price': parse_money(row_data.get('实付金额', '')),
            'quantity': parse_int(row_data.get('购买数量', '1')),
            'totalPrice': parse_money(row_data.get('商品总价', '')),
            'discount': parse_money(row_data.get('优惠金额', '')),
            'freight': parse_money(row_data.get('运费', '')),
            'tax': parse_money(row_data.get('税费', '')),
            'paid': parse_money(row_data.get('实付金额', '')),
            'payMethod': clean_text(row_data.get('支付方式', '')),
            'orderTime': clean_text(row_data.get('下单时间', '')),
            'shipTime': clean_text(row_data.get('发货时间', '')),
            'finishTime': clean_text(row_data.get('完成时间', '')),
            'coupon': clean_text(row_data.get('优惠券金额', '')),
            'invoice': clean_text(row_data.get('是否开票', '')),
        })

output_path.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'wrote {len(records)} orders to {output_path}')
