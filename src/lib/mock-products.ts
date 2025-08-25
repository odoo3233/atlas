export const mockProducts = [
  {
    id: 101,
    barcode: "ATL-LED-001",
    category: "Lighting",
    price: 49.99,
    inStock: true,
    company_name: "Atlas Lighting Solutions",
    company_logo: "/logo.svg",
    image_url: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=800&q=80&auto=format&fit=crop",
    name: "LED Spotlight Pro",
    description: "High-efficiency LED spotlight with smart controls for commercial and residential use",
    specifications: {
      "Power": "50W",
      "Lumens": "5000 lm",
      "Color Temperature": "3000K-6500K",
      "Beam Angle": "25°",
      "Lifespan": "50,000 hours",
      "Warranty": "5 years"
    },
    translations: {
      ar: { 
        name: "كشاف LED احترافي", 
        description: "كشاف LED عالي الكفاءة مع تحكم ذكي للاستخدام التجاري والسكني" 
      },
      en: { 
        name: "LED Spotlight Pro", 
        description: "High-efficiency LED spotlight with smart controls for commercial and residential use" 
      },
      zh: { 
        name: "LED 专业聚光灯", 
        description: "高效 LED 聚光灯，配备智能控制，适用于商业和住宅使用" 
      },
    },
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 102,
    barcode: "ATL-SOL-002",
    category: "Renewable Energy",
    price: 299.0,
    inStock: true,
    company_name: "Atlas Green Energy",
    company_logo: "/logo.svg",
    image_url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&q=80&auto=format&fit=crop",
    name: "Solar Panel 400W Monocrystalline",
    description: "Premium monocrystalline solar panel with maximum efficiency and 25-year warranty",
    specifications: {
      "Power Output": "400W",
      "Efficiency": "22.1%",
      "Voltage": "40.5V",
      "Current": "9.88A",
      "Dimensions": "2008×1002×35mm",
      "Weight": "22.5kg",
      "Warranty": "25 years"
    },
    translations: {
      ar: { 
        name: "لوح شمسي 400 واط أحادي البلورة", 
        description: "لوح شمسي أحادي البلورة عالي الجودة بأقصى كفاءة وضمان 25 سنة" 
      },
      en: { 
        name: "Solar Panel 400W Monocrystalline", 
        description: "Premium monocrystalline solar panel with maximum efficiency and 25-year warranty" 
      },
      zh: { 
        name: "400W 单晶硅太阳能板", 
        description: "优质单晶硅太阳能板，效率最高，25年保修" 
      },
    },
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 103,
    barcode: "ATL-SMT-003",
    category: "Smart Home",
    price: 129.99,
    inStock: true,
    company_name: "Atlas Smart Solutions",
    company_logo: "/logo.svg",
    image_url: "https://images.unsplash.com/photo-1582719478250-24779572d1f3?w=800&q=80&auto=format&fit=crop",
    name: "Smart Thermostat WiFi",
    description: "Advanced WiFi-enabled smart thermostat with AI learning and mobile app control",
    specifications: {
      "Connectivity": "WiFi 802.11 b/g/n",
      "Display": "3.5\" Color LCD",
      "Temperature Range": "5°C to 35°C",
      "Humidity": "5% to 95% RH",
      "Power": "24VAC",
      "Compatibility": "iOS/Android",
      "Warranty": "3 years"
    },
    translations: {
      ar: { 
        name: "منظم حرارة ذكي واي فاي", 
        description: "منظم حرارة ذكي متقدم يدعم واي فاي مع تعلم ذكي وتحكم عبر التطبيق" 
      },
      en: { 
        name: "Smart Thermostat WiFi", 
        description: "Advanced WiFi-enabled smart thermostat with AI learning and mobile app control" 
      },
      zh: { 
        name: "WiFi 智能恒温器", 
        description: "先进的 WiFi 智能恒温器，配备 AI 学习和移动应用控制" 
      },
    },
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 104,
    barcode: "ATL-IND-004",
    category: "Industrial",
    price: 899.99,
    inStock: true,
    company_name: "Atlas Industrial Equipment",
    company_logo: "/logo.svg",
    image_url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80&auto=format&fit=crop",
    name: "Industrial Automation Controller",
    description: "Advanced PLC controller for industrial automation with multiple I/O interfaces",
    specifications: {
      "CPU": "ARM Cortex-A9",
      "Memory": "1GB RAM, 8GB Flash",
      "I/O Ports": "32 Digital, 16 Analog",
      "Communication": "Ethernet, RS485, CAN",
      "Operating Temp": "-20°C to +60°C",
      "Protection": "IP65",
      "Warranty": "2 years"
    },
    translations: {
      ar: { 
        name: "وحدة تحكم أتمتة صناعية", 
        description: "وحدة تحكم PLC متقدمة للأتمتة الصناعية مع واجهات إدخال وإخراج متعددة" 
      },
      en: { 
        name: "Industrial Automation Controller", 
        description: "Advanced PLC controller for industrial automation with multiple I/O interfaces" 
      },
      zh: { 
        name: "工业自动化控制器", 
        description: "先进的 PLC 控制器，用于工业自动化，具有多个 I/O 接口" 
      },
    },
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z"
  },
  {
    id: 105,
    barcode: "ATL-SAF-005",
    category: "Safety Equipment",
    price: 79.99,
    inStock: true,
    company_name: "Atlas Safety Systems",
    company_logo: "/logo.svg",
    image_url: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&q=80&auto=format&fit=crop",
    name: "Smart Safety Helmet",
    description: "Advanced safety helmet with built-in sensors and communication system",
    specifications: {
      "Material": "ABS + PC",
      "Weight": "450g",
      "Battery Life": "12 hours",
      "Sensors": "Impact, Temperature, Gas",
      "Communication": "Bluetooth 5.0",
      "Certification": "CE, ANSI Z89.1",
      "Warranty": "2 years"
    },
    translations: {
      ar: { 
        name: "خوذة أمان ذكية", 
        description: "خوذة أمان متقدمة مع أجهزة استشعار مدمجة ونظام اتصال" 
      },
      en: { 
        name: "Smart Safety Helmet", 
        description: "Advanced safety helmet with built-in sensors and communication system" 
      },
      zh: { 
        name: "智能安全头盔", 
        description: "先进的安全头盔，内置传感器和通信系统" 
      },
    },
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z"
  }
];