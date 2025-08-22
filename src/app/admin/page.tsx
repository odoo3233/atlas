"use client"

import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Plus, 
  Edit, 
  Trash2, 
  Package, 
  Calendar, 
  ShoppingCart, 
  Users,
  BarChart3,
  RefreshCw
} from "lucide-react"

interface Product {
  id: number
  name: string
  description: string
  price: string
  category: string
  barcode: string
  company_name: string
  created_at: string
}

interface Exhibition {
  id: number
  name: string
  description: string
  start_date: string
  end_date: string
  location: string
  organizer: string
  created_at: string
}

interface Stats {
  products: number
  exhibitions: number
  orders: number
  registrations: number
}

export default function AdminPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'exhibitions'>('dashboard')
  const [products, setProducts] = useState<Product[]>([])
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([])
  const [stats, setStats] = useState<Stats>({ products: 0, exhibitions: 0, orders: 0, registrations: 0 })
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formType, setFormType] = useState<'product' | 'exhibition'>('product')

  // Form states
  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    barcode: '',
    image_url: '',
    specifications: '',
    company_name: '',
    company_logo: ''
  })

  const [exhibitionForm, setExhibitionForm] = useState({
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    location: '',
    image_url: '',
    organizer: ''
  })

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch all data in parallel
      const [productsRes, exhibitionsRes, statsRes] = await Promise.all([
        fetch('https://atlas-ha7k.onrender.com/api/products'),
        fetch('https://atlas-ha7k.onrender.com/api/exhibitions'),
        fetch('https://atlas-ha7k.onrender.com/api/admin/stats')
      ])

      if (productsRes.ok) {
        const productsData = await productsRes.json()
        setProducts(productsData)
      } else {
        console.error('Failed to fetch products:', productsRes.status)
      }

      if (exhibitionsRes.ok) {
        const exhibitionsData = await exhibitionsRes.json()
        setExhibitions(exhibitionsData)
      } else {
        console.error('Failed to fetch exhibitions:', exhibitionsRes.status)
      }

      if (statsRes.ok) {
        const statsData = await statsRes.json()
        setStats(statsData)
      } else {
        console.error('Failed to fetch stats:', statsRes.status)
      }
    } catch (error) {
      console.error('Error fetching data:', error)
      alert('خطأ في الاتصال بالخادم. تأكد من أن الباكند يعمل على Render.')
    } finally {
      setLoading(false)
    }
  }

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://atlas-ha7k.onrender.com/api/admin/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...productForm,
          price: parseFloat(productForm.price),
          specifications: JSON.parse(productForm.specifications || '{}')
        }),
      })

      if (response.ok) {
        setShowAddForm(false)
        setProductForm({
          name: '', description: '', price: '', category: '', barcode: '',
          image_url: '', specifications: '', company_name: '', company_logo: ''
        })
        fetchData()
      }
    } catch (error) {
      console.error('Error adding product:', error)
    }
  }

  const handleAddExhibition = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('https://atlas-ha7k.onrender.com/api/admin/exhibitions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(exhibitionForm),
      })

      if (response.ok) {
        setShowAddForm(false)
        setExhibitionForm({
          name: '', description: '', start_date: '', end_date: '',
          location: '', image_url: '', organizer: ''
        })
        fetchData()
      }
    } catch (error) {
      console.error('Error adding exhibition:', error)
    }
  }

  const handleDelete = async (type: 'product' | 'exhibition', id: number) => {
    if (!confirm('هل أنت متأكد من الحذف؟')) return

    try {
      const response = await fetch(`https://atlas-ha7k.onrender.com/api/admin/${type}s/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        fetchData()
      }
    } catch (error) {
      console.error('Error deleting:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center h-64">
            <RefreshCw className="animate-spin h-8 w-8 text-blue-600" />
            <span className="ml-2 text-lg">جاري التحميل...</span>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">لوحة الإدارة</h1>
          <p className="text-gray-600">إدارة المنتجات والمعارض والإحصائيات</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-6 bg-white rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'dashboard'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <BarChart3 className="inline-block w-4 h-4 mr-2" />
            الإحصائيات
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'products'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Package className="inline-block w-4 h-4 mr-2" />
            المنتجات
          </button>
          <button
            onClick={() => setActiveTab('exhibitions')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'exhibitions'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Calendar className="inline-block w-4 h-4 mr-2" />
            المعارض
          </button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <Package className="w-8 h-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">المنتجات</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.products}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <Calendar className="w-8 h-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">المعارض</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.exhibitions}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <ShoppingCart className="w-8 h-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">الطلبات</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.orders}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center">
                <Users className="w-8 h-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">التسجيلات</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.registrations}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Tab */}
        {activeTab === 'products' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">المنتجات</h2>
                <Button
                  onClick={() => {
                    setFormType('product')
                    setShowAddForm(true)
                  }}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة منتج
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      المنتج
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الفئة
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      السعر
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الشركة
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">{product.barcode}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.price} ريال
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {product.company_name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete('product', product.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Exhibitions Tab */}
        {activeTab === 'exhibitions' && (
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">المعارض</h2>
                <Button
                  onClick={() => {
                    setFormType('exhibition')
                    setShowAddForm(true)
                  }}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  إضافة معرض
                </Button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      المعرض
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      التاريخ
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الموقع
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      المنظم
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      الإجراءات
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {exhibitions.map((exhibition) => (
                    <tr key={exhibition.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{exhibition.name}</div>
                          <div className="text-sm text-gray-500">{exhibition.description.substring(0, 50)}...</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(exhibition.start_date).toLocaleDateString('ar-SA')} - {new Date(exhibition.end_date).toLocaleDateString('ar-SA')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {exhibition.location}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {exhibition.organizer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete('exhibition', exhibition.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Add Form Modal */}
        {showAddForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold mb-4">
                {formType === 'product' ? 'إضافة منتج جديد' : 'إضافة معرض جديد'}
              </h3>
              
              <form onSubmit={formType === 'product' ? handleAddProduct : handleAddExhibition}>
                {formType === 'product' ? (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">اسم المنتج</label>
                      <input
                        type="text"
                        value={productForm.name}
                        onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                      <textarea
                        value={productForm.description}
                        onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">السعر</label>
                        <input
                          type="number"
                          step="0.01"
                          value={productForm.price}
                          onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">الفئة</label>
                        <input
                          type="text"
                          value={productForm.category}
                          onChange={(e) => setProductForm({...productForm, category: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">الباركود</label>
                        <input
                          type="text"
                          value={productForm.barcode}
                          onChange={(e) => setProductForm({...productForm, barcode: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">اسم الشركة</label>
                        <input
                          type="text"
                          value={productForm.company_name}
                          onChange={(e) => setProductForm({...productForm, company_name: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">اسم المعرض</label>
                      <input
                        type="text"
                        value={exhibitionForm.name}
                        onChange={(e) => setExhibitionForm({...exhibitionForm, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">الوصف</label>
                      <textarea
                        value={exhibitionForm.description}
                        onChange={(e) => setExhibitionForm({...exhibitionForm, description: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ البداية</label>
                        <input
                          type="date"
                          value={exhibitionForm.start_date}
                          onChange={(e) => setExhibitionForm({...exhibitionForm, start_date: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ النهاية</label>
                        <input
                          type="date"
                          value={exhibitionForm.end_date}
                          onChange={(e) => setExhibitionForm({...exhibitionForm, end_date: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">الموقع</label>
                      <input
                        type="text"
                        value={exhibitionForm.location}
                        onChange={(e) => setExhibitionForm({...exhibitionForm, location: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">المنظم</label>
                      <input
                        type="text"
                        value={exhibitionForm.organizer}
                        onChange={(e) => setExhibitionForm({...exhibitionForm, organizer: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </>
                )}
                
                <div className="flex justify-end space-x-3 mt-6">
                  <Button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    variant="outline"
                  >
                    إلغاء
                  </Button>
                  <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                    {formType === 'product' ? 'إضافة المنتج' : 'إضافة المعرض'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}
