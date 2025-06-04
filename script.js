// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "مكواة بخارية لاسلكية ماركة LIBRONIC ",
        price: 37000,
        category: "electronics",
        images: [
            "https://qarwana.com/wp-content/uploads/2024/10/1-3-1024x1024.jpg",
            "https://qarwana.com/wp-content/uploads/2024/10/1-3-1024x1024.jpg"
        ],
      
    },
    {
        id: 2,
        name: "محضرة شامية كهربائية",
        price: 25000,
        category: "electronics",
        images: [
            "https://opensooq-images.os-cdn.com/previews/0x720/f7/1f/f71fd8298d5212bcc90859017b34b9a6febee48c7c175d893af4d9f2f068655f.png.webp",
            "https://opensooq-images.os-cdn.com/previews/0x720/f7/1f/f71fd8298d5212bcc90859017b34b9a6febee48c7c175d893af4d9f2f068655f.png.webp"
        ]
    },
    {
        id: 11,
        name: "ساحبة صاروخية 6 انج",
        price: 40000,
        category: "electronics",
        images: [
            "https://toolmart.me/cdn/shop/files/a__a_s_as-l4.jpg",
            "https://toolmart.me/cdn/shop/files/a__a_s_as-l4.jpg"
        ]
    },
    {
        id: 12,
        name: "محضرة قهوة تركية ماركة مولكس",
        price: 28000,
        category: "electronics",
        images: [
            "https://iwanshop.com/public/uploads/all/k9GCNGItm6moQMQl8b2sJwgeXnYA6CREskEfo79p.webp",
            "https://iwanshop.com/public/uploads/all/k9GCNGItm6moQMQl8b2sJwgeXnYA6CREskEfo79p.webp"
        ]
    },
    {
        id: 3,
        name: "سماعات ايربود S20",
        price: 25000,
        category: "accessories",
        images: [
            "data:image/jpeg;base64,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",
            "data:image/jpeg;base64,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"
        ]
    },
    {
        id: 4,
        name: "فرشاة تنظيف الالكترونيات 20 في1",
        price: 20000,
        category: "accessories",
        images: [
            "https://sc04.alicdn.com/kf/H61f5fda7cfe946bf80f9d780694a0b84d/231763589/H61f5fda7cfe946bf80f9d780694a0b84d.jpg",
            "https://m.media-amazon.com/images/I/61X9zlVoxSL.jpg"
        ]
    },
    {
        id: 5,
        name: "جهاز تحديد الحاجب والوجه",
        price: 25000,
        category: "skincare",
        images: [
            "https://s.alicdn.com/@sc04/kf/H250f32ca341e4af5b735592e3da351c5f.jpg_720x720q50.jpg",
            "https://s.alicdn.com/@sc04/kf/H153672bd815840399ef0bdf7c6a1bc95X.jpg_720x720q50.jpg"
        ]
    },
    {
        id: 6,
        name: "شامبو صبغ للشعر بزيت الاركان لون-البني الطبيعي-",
        price: 13000,
        category: "skincare",
        images: [
            "https://cdn.salla.sa/RodAq/ZE2vhwwnBr7i9kh55zcSqbtuZPXpAvBTpMKBVw34.jpg",
            "https://cdn.salla.sa/RodAq/ZE2vhwwnBr7i9kh55zcSqbtuZPXpAvBTpMKBVw34.jpg"
        ]
    },
    {
        id: 13,
        name: "مسدس تدليك شحن 4في1",
        price: 23000,
        category: "skincare",
        images: [
            "https://opensooq-images.os-cdn.com/previews/2048x0/a9/cb/a9cbb4226581c2b5d5d98fe24f4812b365a5e835892ea4a110a82e160797ec1f.jpg.webp",
            "https://opensooq-images.os-cdn.com/previews/2048x0/a9/cb/a9cbb4226581c2b5d5d98fe24f4812b365a5e835892ea4a110a82e160797ec1f.jpg.webp"
        ]
    },
    {
        id: 7,
        name: "ستاند هاتف مغناطيسي",
        price: 20000,
        category: "accessories",
        images: [
            "https://ls6iibytsc.eu.scalesta-cdn.com/_62yfEdHoYCUDcebBV3y6-BNIUA=/filters:format(webp):fill(fff):quality(90)/www.gstoreq8.com/images/detailed/285/G15950.webp",
            "https://ls6iibytsc.eu.scalesta-cdn.com/G1a7sQIpHZNmz9Rnw66mKcX10oo=/filters:format(webp):fill(fff):quality(90)/www.gstoreq8.com/images/detailed/285/G15950__3_.webp"
        ]
    },
    {
        id: 8,
        name: "ستاند لابتوب المنيوم قابل للطي",
        price: 25000,
        category: "accessories",
        images: [
            "https://cdn.salla.sa/Orbp/hDXwhAe500XEVktxQUOhL7u3qnS10F2XEBTItO9L.png",
            "https://m.media-amazon.com/images/I/81T3mcf46RL._AC_SX522_.jpg"
        ]
    },
    {
        id: 9,
        name: "نك مايك ماركة yesido",
        price: 45000,
        category: "accessories",
        images: [
            "https://imychic.com/wp-content/uploads/2024/07/Double-Microphone-Cravate-Sans-Fil-A-Faible-Latence-Avec-Recepteur-3en1-Yesido-KR15-6.jpg.webp",
            "https://matjardora.com/upload/7f88f510843f3dcc64883d7c16eed988_800x600.png"
        ]
    },
    {
        id: 13,
        name: "جرس باب ذكي -كاميرا وتطبيق- ",
        price: 25000,
        category: "accessories",
        images: [
            "https://media.zid.store/beab53b5-70d3-4c90-8396-4b3566f5e8d1/0bac8c55-d4f5-4266-b2b8-1bb901e27d5f.jpg",
            "https://media.zid.store/beab53b5-70d3-4c90-8396-4b3566f5e8d1/0bac8c55-d4f5-4266-b2b8-1bb901e27d5f.jpg"
        ]
    },
    {
        id: 10,
        name: "مصباح كرستال ملون صغير ",
        price: 13000,
        category: "accessories",
        images: [
            "https://m.media-amazon.com/images/I/71qaNeCTU0L._AC_SX679_.jpg",
            "https://m.media-amazon.com/images/I/71qaNeCTU0L._AC_SX679_.jpg"
        ]
    }
];

// بيانات السلة
let cart = [];

// عناصر DOM
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.querySelector('.cart-count');
const productsContainer = document.querySelector('.products-container');
const searchInput = document.getElementById('searchInput');

// تهيئة المتجر
function initStore() {
    renderProducts(products);
    updateCart();
}

// عرض المنتجات
function renderProducts(productsToRender) {
    productsContainer.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsContainer.innerHTML = '<p class="no-results">لا توجد منتجات مطابقة للبحث</p>';
        return;
    }
    
    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.dataset.category = product.category;
        productElement.innerHTML = `
            <div class="product-images">
                <img src="${product.images[0]}" alt="${product.name}">
                <img src="${product.images[1]}" alt="${product.name}" class="secondary-img">
            </div>
            <h3>${product.name}</h3>
            <p class="description">${product.description || ''}</p>
            <p class="price">${formatPrice(product.price)} د.ع</p>
            <button onclick="addToCart('${product.name}', ${product.price}, '${product.category}', ${product.id})">أضف إلى السلة</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// عرض/إخفاء السلة
function toggleCart() {
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartOverlay.classList.contains('active') ? 'hidden' : 'auto';
}

// تصفية المنتجات حسب التصنيف
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    renderProducts(filteredProducts);
}

// بحث المنتجات
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm.length < 2) {
        renderProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
}

// إضافة منتج إلى السلة
function addToCart(name, price, category, id) {
    // التحقق إذا كان المنتج موجود بالفعل في السلة
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id,
            name,
            price,
            category,
            quantity: 1
        });
    }
    
    updateCart();
    showAddedToCartMessage(name);
}

// عرض رسالة إضافة المنتج للسلة
function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'notification';
    message.textContent = `تم إضافة ${productName} إلى السلة`;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// تحديث السلة
function updateCart() {
    // تحديث عدد العناصر في السلة
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
    
    // تحديث قائمة العناصر في السلة
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">سلة الشراء فارغة</p>';
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="https://via.placeholder.com/50?text=${item.name.split(' ')[0]}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} د.ع</div>
                </div>
                <div class="cart-item-quantity">
                    <button onclick="decreaseQuantity(${index})">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="increaseQuantity(${index})">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
    
    // تحديث المجموع الكلي
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalElement.textContent = formatPrice(total);
}

// تقليل كمية المنتج
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}

// زيادة كمية المنتج
function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCart();
}

// إزالة المنتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// تنسيق السعر
function formatPrice(price) {
    return new Intl.NumberFormat().format(price);
}

function checkout() {
    if (cart.length === 0) {
        alert('السلة فارغة، يرجى إضافة منتجات أولاً');
        return;
    }

    // قراءة معلومات الزبون من الحقول
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();

    if (!name || !phone || !address) {
        alert('يرجى إدخال الاسم ورقم الهاتف والعنوان.');
        return;
    }

    // ترتيب تفاصيل الطلب
    let orderDetails = '📦 طلب جديد:\n\n';
    cart.forEach(item => {
        orderDetails += `• ${item.name} - ${item.quantity} × ${formatPrice(item.price)} د.ع = ${formatPrice(item.price * item.quantity)} د.ع\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    orderDetails += `\n💰 المجموع الكلي: ${formatPrice(total)} د.ع`;

    // إضافة معلومات الزبون
    orderDetails += `\n\n👤 الاسم: ${name}\n📞 الهاتف: ${phone}\n📍 العنوان: ${address}`;

    // التوكن وID البوت
    const botToken = '8174915747:AAFI-s-L_aJfUiyMJjfqiZSJ878OROOFjNU';
    const chatId = '372057853';
    const telegramApi = `https://api.telegram.org/bot${botToken}/sendMessage`;

    fetch(telegramApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: orderDetails
        })
    })
    .then(response => {
        if (response.ok) {
            alert('✅ تم إرسال الطلب بنجاح، شكرًا لاختيارك متجرنا!');
            cart = [];
            updateCart();
            toggleCart();

            // مسح حقول الزبون
            document.getElementById('customerName').value = '';
            document.getElementById('customerPhone').value = '';
            document.getElementById('customerAddress').value = '';
        } else {
            alert('❌ فشل في إرسال الطلب إلى التليجرام.');
        }
    })
    .catch(error => {
        alert('🚫 حدث خطأ أثناء إرسال الطلب: ' + error.message);
    });
}

// إدارة القوائم المنسدلة
document.addEventListener('click', function(e) {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        if (e.target === dropbtn || dropbtn.contains(e.target)) {
            // إذا كان النقر على زر القائمة، تبديل الحالة
            dropdown.classList.toggle('active');
        } else if (!dropdown.contains(e.target)) {
            // إذا كان النقر خارج القائمة، إخفاؤها
            dropdown.classList.remove('active');
        }
    });
});

// تهيئة المتجر عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initStore);

// إغلاق السلة عند النقر خارجها
cartOverlay.addEventListener('click', function(e) {
    if (e.target === cartOverlay) {
        toggleCart();
    }
});