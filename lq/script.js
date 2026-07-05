const filters = ["全部", "待付款", "待发货", "待收货", "已完成", "售后"];
let orders = [];

const ordersData = [
  {
    id: "ORD0001",
    orderNo: "24gsafh86897",
    status: "待发货",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "顺丰速运",
    expressNo: "SF123456789",
    shop: "渝欧母婴商城-保税仓",
    productName: "皇家美素佳儿幼儿配方奶粉",
    description: "皇家美素佳儿幼儿配方奶粉，1段，800g",
    image: "assets/images/ORD0001.jpg",
    spec: "1段，800g",
    price: 653.4,
    quantity: 3,
    totalPrice: 594.0,
    discount: 59.4,
    freight: 10.0,
    tax: 10.0,
    paid: 653.4,
    payMethod: "支付宝",
    orderTime: "2025/07/28 15:52",
    shipTime: "2025-07-28 16:00",
    finishTime: "2025-07-28 16:00",
    coupon: "¥10.00",
    invoice: "否"
  },
  {
    id: "ORD0002",
    orderNo: "890fhgnap7",
    status: "已完成",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "圆通速递",
    expressNo: "YTO000123456",
    shop: "渝欧母婴商城-保税仓",
    productName: "A2白金版幼儿配方奶粉",
    description: "A2白金版幼儿配方奶粉，1段，900g",
    image: "assets/images/ORD0002.png",
    spec: "2段，900g",
    price: 819.2,
    quantity: 4,
    totalPrice: 752.0,
    discount: 75.2,
    freight: 12.0,
    tax: 20.0,
    paid: 819.2,
    payMethod: "微信",
    orderTime: "2025/07/23 15:52",
    shipTime: "2025-07-28 16:05",
    finishTime: "2025-07-28 16:05",
    coupon: "¥20.00",
    invoice: "否"
  },
  {
    id: "ORD0003",
    orderNo: "254bgs7o3f",
    status: "待付款",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "中通快递",
    expressNo: "ZTO000123456",
    shop: "渝欧母婴商城-保税仓",
    productName: "德国爱他美幼儿配方奶粉",
    description: "德国爱他美幼儿配方奶粉，1段，900g",
    image: "assets/images/ORD0003.png",
    spec: "1段，900g",
    price: 493.0,
    quantity: 2,
    totalPrice: 460.0,
    discount: 46.0,
    freight: 12.0,
    tax: 25.0,
    paid: 493.0,
    payMethod: "财付通",
    orderTime: "2025/07/24 15:52",
    shipTime: "2025-07-28 16:10",
    finishTime: "2025-07-28 16:10",
    coupon: "¥25.00",
    invoice: "否"
  },
  {
    id: "ORD0004",
    orderNo: "54nu8fgjladf8",
    status: "待收货",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "百世快递",
    expressNo: "BEST000123456",
    shop: "渝欧母婴商城-保税仓",
    productName: "澳洲爱他美幼儿配方奶粉",
    description: "澳洲爱他美幼儿配方奶粉，1段，900g",
    image: "assets/images/ORD0004.png",
    spec: "3段，900g",
    price: 380.0,
    quantity: 1,
    totalPrice: 350.0,
    discount: 35.0,
    freight: 10.0,
    tax: 15.0,
    paid: 380.0,
    payMethod: "信用卡",
    orderTime: "2025/07/26 15:52",
    shipTime: "2025-07-28 16:15",
    finishTime: "2025-07-28 16:15",
    coupon: "¥15.00",
    invoice: "否"
  },
  {
    id: "ORD0005",
    orderNo: "24jasohafu",
    status: "待付款",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "韵达快递",
    expressNo: "YD000123456",
    shop: "渝欧母婴商城-保税仓",
    productName: "牛栏幼儿配方奶粉",
    description: "牛栏幼儿配方奶粉，1段，900g",
    image: "assets/images/ORD0005.png",
    spec: "1段，900g",
    price: 1740.0,
    quantity: 5,
    totalPrice: 1600.0,
    discount: 160.0,
    freight: 10.0,
    tax: 30.0,
    paid: 1740.0,
    payMethod: "支付宝",
    orderTime: "2025/07/27 15:52",
    shipTime: "2025-07-28 16:20",
    finishTime: "2025-07-28 16:20",
    coupon: "¥30.00",
    invoice: "否"
  },
  {
    id: "ORD0006",
    orderNo: "63ejs8if8adfg",
    status: "待发货",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "顺丰速运",
    expressNo: "SF123456789",
    shop: "渝欧母婴商城-保税仓",
    productName: "德国雀巢幼儿配方奶粉",
    description: "德国雀巢幼儿配方奶粉，1段，900g",
    image: "assets/images/ORD0006.png",
    spec: "2段，900g",
    price: 648.0,
    quantity: 3,
    totalPrice: 600.0,
    discount: 60.0,
    freight: 8.0,
    tax: 20.0,
    paid: 648.0,
    payMethod: "微信",
    orderTime: "2025/07/21 15:52",
    shipTime: "2025-07-28 16:25",
    finishTime: "2025-07-28 16:25",
    coupon: "¥20.00",
    invoice: "否"
  },
  {
    id: "ORD0007",
    orderNo: "41jtap8d88a",
    status: "已完成",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "圆通速递",
    expressNo: "YTO000123456",
    shop: "渝欧母婴商城-保税仓",
    productName: "荷兰美素幼儿配方奶粉",
    description: "荷兰美素幼儿配方奶粉，1段，900g",
    image: "assets/images/ORD0007.png",
    spec: "2段，900g",
    price: 617.0,
    quantity: 2,
    totalPrice: 560.0,
    discount: 56.0,
    freight: 16.0,
    tax: 15.0,
    paid: 617.0,
    payMethod: "财付通",
    orderTime: "2025/07/24 15:52",
    shipTime: "2025-07-28 16:30",
    finishTime: "2025-07-28 16:30",
    coupon: "¥15.00",
    invoice: "否"
  },
  {
    id: "ORD0008",
    orderNo: "08yanhg3fu87",
    status: "待收货",
    recipient: "黄泡泡",
    phone: "18888888888",
    address: "四川省成都市",
    expressCompany: "中通快递",
    expressNo: "ZTO000123456",
    shop: "渝欧母婴商城-保税仓",
    productName: "德国喜宝幼儿配方奶粉",
    description: "德国喜宝幼儿配方奶粉，1段，900g",
    image: "assets/images/ORD0008.png",
    spec: "1段，900g",
    price: 316.0,
    quantity: 1,
    totalPrice: 280.0,
    discount: 28.0,
    freight: 8.0,
    tax: 0.0,
    paid: 316.0,
    payMethod: "财付通",
    orderTime: "2025/07/26 15:52",
    shipTime: "2025-07-28 16:30",
    finishTime: "2025-07-28 16:30",
    coupon: "¥0.00",
    invoice: "否"
  }
];

function normalizeStatus(status) {
  const map = {
    待付款: "待付款",
    待发货: "待发货",
    待收货: "待收货",
    已完成: "已完成",
    售后: "售后"
  };
  return map[status] || status;
}

function parseMoney(value) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : 0;
  }
  if (typeof value === "string") {
    const cleaned = value.replace(/[^-\u007f]/g, "").replace(/[^-9.-]/g, "");
    const parsed = Number(cleaned);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function getImagePath(raw) {
  const orderId = raw.id || raw.订单ID || raw.orderNo || "";
  const imageMap = {
    ORD0001: "assets/images/ORD0001.jpg",
    ORD0002: "assets/images/ORD0002.png",
    ORD0003: "assets/images/ORD0003.png",
    ORD0004: "assets/images/ORD0004.png",
    ORD0005: "assets/images/ORD0005.png",
    ORD0006: "assets/images/ORD0006.png",
    ORD0007: "assets/images/ORD0007.png",
    ORD0008: "assets/images/ORD0008.png"
  };
  return imageMap[orderId] || raw.image || raw.img || "assets/flower.svg";
}

function normalizeOrder(raw) {
  const status = normalizeStatus(raw.status || raw.订单状态 || "");
  const badgeClass =
    status === "待付款"
      ? "badge--danger"
      : status === "待发货"
      ? "badge"
      : status === "已完成"
      ? "badge--success"
      : status === "待收货"
      ? "badge--warning"
      : "badge--danger";

  const quantity = Number(raw.quantity || raw.购买数量 || 1);
  const totalPrice = parseMoney(raw.totalPrice || raw.商品总价 || 0);
  const unitPrice = parseMoney(
    raw.unitPrice || raw.singlePrice || raw.pricePerUnit || raw.pricePerCan ||
    (totalPrice && quantity ? totalPrice / quantity : 0)
  );

  return {
    id: raw.id || raw.订单ID || raw.orderNo || "",
    orderNo: raw.orderNo || raw.订单号 || raw.订单ID || "",
    title: raw.productName || raw.商品名称 || "商品",
    time: raw.orderTime || raw.下单时间 || "",
    price: parseMoney(raw.paid || raw.实付金额 || raw.price || 0),
    totalPrice,
    unitPrice,
    discount: parseMoney(raw.discount || raw.优惠金额 || 0),
    freight: parseMoney(raw.freight || raw.运费 || 0),
    tax: parseMoney(raw.tax || raw.税费 || 0),
    status,
    badgeClass,
    shop: raw.shop || raw.店铺名称 || "",
    address: raw.address || raw.收货地址 || "",
    contact: raw.recipient || raw.收件人姓名 || "",
    phone: raw.phone || raw.收件人电话 || "",
    expressCompany: raw.expressCompany || raw.快递公司 || "",
    expressNo: raw.expressNo || raw.快递单号 || "",
    image: getImagePath(raw),
    productName: raw.productName || raw.商品名称 || "商品",
    spec: raw.spec || raw.商品规格 || raw.商品描述 || "",
    quantity: Number(raw.quantity || raw.购买数量 || 1),
    coupon: raw.coupon || raw.优惠券金额 || "",
    items: [raw.productName || raw.商品名称 || "商品"],
    progress: [
      {
        title: status === "已完成"
          ? "订单已完成"
          : status === "待付款"
          ? "等待付款"
          : status === "待发货"
          ? "商家已配货"
          : status === "待收货"
          ? "配送中"
          : "售后处理中",
        time: raw.shipTime || raw.发货时间 || raw.orderTime || ""
      }
    ]
  };
}

function loadOrders() {
  orders = ordersData.map(normalizeOrder);
  renderFilters();
  renderOrders();
}

let activeFilter = "全部";
const orderList = document.getElementById("orderList");
const filterBar = document.getElementById("filterBar");
const detailView = document.getElementById("detailView");
const listView = document.getElementById("listView");
const detailContent = document.getElementById("detailContent");
const backBtn = document.getElementById("backBtn");
const toast = document.getElementById("toast");
const page = document.querySelector(".page");
let lastListScrollTop = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("toast--show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("toast--show");
  }, 1400);
}

function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast("复制成功")).catch(() => fallbackCopy(text));
    return;
  }
  fallbackCopy(text);
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
    showToast("复制成功");
  } catch (error) {
    showToast("复制失败，请手动复制");
  } finally {
    document.body.removeChild(textarea);
  }
}

function renderFilters() {
  filterBar.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-chip ${filter === activeFilter ? "filter-chip--active" : ""}" data-filter="${filter}" type="button">
          ${filter}
        </button>
      `
    )
    .join("");

  filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeFilter = chip.dataset.filter;
      renderFilters();
      renderOrders();
    });
  });
}

function renderOrders() {
  const visibleOrders =
    activeFilter === "全部"
      ? orders
      : orders.filter((order) => order.status === activeFilter);

  orderList.innerHTML = visibleOrders
    .map(
      (order) => `
        <article class="order-card" data-id="${order.id}">
          <div class="order-card__top">
            <div>
              <div class="order-card__title">${order.title}</div>
              <p class="order-card__meta">订单号 ${order.id} · ${order.time}</p>
            </div>
            <span class="badge ${order.badgeClass}">${order.status}</span>
          </div>

          <div class="order-card__product" data-id="${order.id}">
            <img class="order-card__image" src="${order.image}" alt="${order.productName}" />
            <div class="order-card__product-info">
              <div class="order-card__product-name">${order.productName}</div>
              <p class="order-card__spec">${order.spec}</p>
              <div class="order-card__price-single">￥${order.unitPrice.toFixed(2)}</div>
            </div>
            <div class="order-card__quantity">×${order.quantity}</div>
          </div>

          <div class="order-card__footer">
            <div class="price-summary">
              <div class="price-summary__coupon-row">
                <span class="price-summary__coupon">${order.coupon ? `专属券 ${order.coupon}` : "无优惠券"}</span>
                <button class="price-summary__claim" type="button">领取优惠券</button>
              </div>
              <div class="price-summary__row price-summary__row--top">
                <span><em>总价：</em><strong>¥${order.totalPrice.toFixed(2)}</strong></span>
                <span><em>优惠：</em><strong>¥${order.discount.toFixed(2)}</strong></span>
              </div>
              <div class="price-summary__row price-summary__row--paid">
                <em>实付：</em>
                <strong>¥${order.price.toFixed(2)}</strong>
              </div>
              <div class="price-summary__row price-summary__row--extra">
                (含运费 ¥${order.freight.toFixed(2)}，税费 ¥${order.tax.toFixed(2)})
              </div>
            </div>
          </div>

          <div class="order-card__actions">
            <button class="order-card__action" type="button" data-action="refund">查看返现金</button>
          </div>
        </article>
      `
    )
    .join("");

  orderList.querySelectorAll(".order-card").forEach((card) => {
    card.querySelectorAll("[data-action]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (button.dataset.action === "logistics") {
          alert("物流信息即将上线，敬请期待");
        } else {
          alert("返现记录正在整理中");
        }
      });
    });

    card.querySelector(".price-summary__claim")?.addEventListener("click", (event) => {
      event.stopPropagation();
      showToast("领取优惠券成功");
    });

    card.querySelector(".order-card__product").addEventListener("click", (event) => {
      event.stopPropagation();
      openDetail(card.dataset.id);
    });
  });
}

function openDetail(orderId) {
  const order = orders.find((item) => item.id === orderId);
  if (!order) return;

  lastListScrollTop = page.scrollTop;

  detailContent.innerHTML = `
    <div class="detail-page">
      <section class="detail-status">
        <div class="detail-status__text">
          <div class="detail-status__title">已完成</div>
          <div class="detail-status__sub">欢迎再次光临购买</div>
        </div>
        <div class="detail-status__icon">✓</div>
      </section>

      <section class="detail-card detail-card--logistics">
        <div class="detail-logistics__row">
          <div class="detail-logistics__company">${order.expressCompany || "顺丰速运"}</div>
          <div class="detail-logistics__arrow">›</div>
        </div>
        <div class="detail-logistics__no">${order.expressNo || "SF318598000****"}</div>
        <div class="detail-divider"></div>
        <div class="detail-recipient">
          <div class="detail-recipient__name">${order.contact} ${order.phone || "136****1217"}</div>
          <div class="detail-recipient__address">${order.address}</div>
        </div>
        <div class="detail-divider"></div>
        <div class="detail-orderer">
          <div class="detail-orderer__title">订购人信息</div>
          <div class="detail-orderer__row"><span>订购人姓名</span><strong>${order.contact}</strong></div>
          <div class="detail-orderer__row"><span>身份证号</span><strong>500***********052</strong></div>
        </div>
      </section>

      <section class="detail-card detail-card--product">
        <div class="detail-shop">
          <div class="detail-shop__icon">🏪</div>
          <div class="detail-shop__name">${order.shop}</div>
        </div>
        <div class="detail-divider"></div>
        <div class="detail-product-row">
          <img class="detail-product__image" src="${order.image}" alt="${order.productName}" />
          <div class="detail-product__info">
            <div class="detail-product__name">${order.productName}</div>
            <div class="detail-product__spec">规格：${order.spec}</div>
            <div class="detail-product__meta">
              <div class="detail-product__price">￥${order.unitPrice.toFixed(2)}</div>
              <div class="detail-product__quantity">×${order.quantity}</div>
            </div>
          </div>
        </div>
        <div class="detail-product__actions">
          <button type="button" class="detail-pill">售后</button>
        </div>
      </section>

      <section class="detail-coupon">
        <div class="detail-coupon__amount">￥30</div>
        <div class="detail-coupon__text">
          <div>您有30元现金待领取</div>
          <div>提现成功</div>
        </div>
        <button type="button" class="detail-coupon__btn">查看</button>
      </section>

      <section class="detail-card detail-card--amount">
        <div class="detail-amount__row"><span>商品总价</span><strong>￥${order.totalPrice.toFixed(2)}</strong></div>
        <div class="detail-amount__row"><span>税费</span><strong>￥${order.tax.toFixed(2)}</strong></div>
        <div class="detail-amount__row"><span>运费</span><strong>￥${order.freight.toFixed(2)}</strong></div>
        <div class="detail-amount__row"><span>优惠券</span><strong>-￥${order.discount.toFixed(2)}</strong></div>
        <div class="detail-divider"></div>
        <div class="detail-amount__row detail-amount__row--total"><span>实付金额</span><strong>￥${order.price.toFixed(2)}</strong></div>
      </section>

      <section class="detail-card detail-card--info">
        <div class="detail-info__row">
          <span>订单号</span>
          <div class="detail-info__value">
            <strong>${order.id}</strong>
            <button class="copy-btn" type="button" data-copy="${order.id}">📋</button>
          </div>
        </div>
        <div class="detail-info__row"><span>创建时间</span><strong>${order.time}</strong></div>
        <div class="detail-info__row"><span>支付时间</span><strong>${order.time}</strong></div>
        <div class="detail-info__row"><span>支付方式</span><strong>${order.payMethod || "微信支付"}</strong></div>
      </section>

      <section class="detail-card detail-card--invoice">
        <div class="detail-invoice">申请开票</div>
      </section>
    </div>

    <div class="detail-footer">
      <button type="button" class="detail-footer__btn detail-footer__btn--service">
        <span>💬</span>
        <span>联系客服</span>
      </button>
      <button type="button" class="detail-footer__btn detail-footer__btn--ghost">查看物流</button>
    </div>
  `;

  detailContent.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      copyText(button.dataset.copy);
    });
  });

  listView.classList.remove("view--active");
  detailView.classList.add("view--active");
  document.body.classList.add("detail-active");
  page.scrollTop = 0;
}

backBtn.addEventListener("click", () => {
  detailView.classList.remove("view--active");
  listView.classList.add("view--active");
  document.body.classList.remove("detail-active");
  page.scrollTop = lastListScrollTop;
});

loadOrders();
