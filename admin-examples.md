# دليل إدارة البيانات في الباكند

## 🔗 رابط الباكند
```
https://atlas-ha7k.onrender.com
```

## 📋 إضافة منتج جديد
```bash
curl -X POST https://atlas-ha7k.onrender.com/api/admin/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "منتج جديد",
    "description": "وصف المنتج الجديد",
    "price": 299.99,
    "category": "الإضاءة",
    "barcode": "ATLP007",
    "image_url": "/products/new-product.jpg",
    "specifications": {"power": "60W", "color": "أبيض"},
    "company_name": "شركة الإضاءة الحديثة",
    "company_logo": "/logos/new-company.png"
  }'
```

## 🎪 إضافة معرض جديد
```bash
curl -X POST https://atlas-ha7k.onrender.com/api/admin/exhibitions \
  -H "Content-Type: application/json" \
  -d '{
    "name": "معرض التكنولوجيا 2025",
    "description": "معرض للتقنيات الحديثة والابتكارات",
    "start_date": "2025-09-15",
    "end_date": "2025-09-18",
    "location": "مركز الرياض للمعارض، الرياض، السعودية",
    "image_url": "/exhibitions/tech-expo-2025.jpg",
    "organizer": "وزارة الاتصالات وتقنية المعلومات"
  }'
```

## 📊 إحصائيات قاعدة البيانات
```
GET https://atlas-ha7k.onrender.com/api/admin/stats
```

## 🔄 تحديث منتج موجود
```bash
curl -X PUT https://atlas-ha7k.onrender.com/api/admin/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "LED Panel محسن",
    "description": "لوحة LED محسنة مع تحكم ذكي",
    "price": 349.99,
    "category": "الإضاءة",
    "barcode": "ATLP001",
    "image_url": "/products/led-panel-enhanced.jpg",
    "specifications": {"power": "50W", "color": "أبيض", "smart": true},
    "company_name": "Shenzhen Lighting Co.",
    "company_logo": "/logos/shenzhen-lighting.png"
  }'
```

## 🗑️ حذف منتج
```bash
curl -X DELETE https://atlas-ha7k.onrender.com/api/admin/products/1
```

## 🌐 استخدام Postman أو Insomnia
يمكنك استخدام هذه الأدوات بدلاً من curl:

1. **Postman:** https://www.postman.com/
2. **Insomnia:** https://insomnia.rest/

### مثال في Postman:
- **Method:** POST
- **URL:** `https://atlas-ha7k.onrender.com/api/admin/products`
- **Headers:** `Content-Type: application/json`
- **Body:** JSON data

## 📱 تطبيق ويب للإدارة (مقترح)
يمكننا إنشاء واجهة ويب بسيطة لإدارة البيانات:

```
https://atlas-ha7k.onrender.com/admin
```

هل تريد أن أنشئ لك واجهة إدارة بسيطة؟ 🤔
