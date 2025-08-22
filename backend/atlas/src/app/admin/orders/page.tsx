'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  MessageSquare, 
  Phone, 
  Mail, 
  Building, 
  Package, 
  Calendar,
  CheckCircle,
  Clock,
  AlertCircle,
  Truck,
  XCircle
} from 'lucide-react';

interface Order {
  id: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  company_name: string;
  message: string;
  status: string;
  created_at: string;
  items: Array<{
    id: number;
    product_id: number;
    product_name: string;
    product_barcode: string;
    quantity: number;
    price: number;
  }>;
  notes: Array<{
    id: number;
    note: string;
    created_at: string;
  }>;
}

export default function AdminOrders() {
  const { t } = useTranslation();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [newNote, setNewNote] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/orders');
      if (response.ok) {
        const data = await response.json();
        setOrders(data);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId: number, status: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchOrders();
      }
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const addNote = async (orderId: number) => {
    if (!newNote.trim()) return;

    try {
      const response = await fetch(`http://localhost:5000/api/orders/${orderId}/notes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note: newNote }),
      });

      if (response.ok) {
        setNewNote('');
        fetchOrders();
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'new':
        return <Clock className="w-4 h-4 text-blue-500" />;
      case 'processing':
        return <Package className="w-4 h-4 text-yellow-500" />;
      case 'contacted':
        return <MessageSquare className="w-4 h-4 text-green-500" />;
      case 'shipped':
        return <Truck className="w-4 h-4 text-purple-500" />;
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'contacted':
        return 'bg-green-100 text-green-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">إدارة الطلبات</h1>
          <p className="text-gray-600">إدارة جميع طلبات المنتجات والتفاعل مع العملاء</p>
        </div>

        {/* Status Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <Button
              variant={statusFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('all')}
              className="text-sm"
            >
              جميع الطلبات ({orders.length})
            </Button>
            <Button
              variant={statusFilter === 'new' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('new')}
              className="text-sm"
            >
              جديدة ({orders.filter(o => o.status === 'new').length})
            </Button>
            <Button
              variant={statusFilter === 'processing' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('processing')}
              className="text-sm"
            >
              قيد المعالجة ({orders.filter(o => o.status === 'processing').length})
            </Button>
            <Button
              variant={statusFilter === 'contacted' ? 'default' : 'outline'}
              onClick={() => setStatusFilter('contacted')}
              className="text-sm"
            >
              تم التواصل ({orders.filter(o => o.status === 'contacted').length})
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Orders List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">الطلبات</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <div
                    key={order.id}
                    className={`p-6 cursor-pointer transition-colors ${
                      selectedOrder?.id === order.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedOrder(order)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        {getStatusIcon(order.status)}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(order.created_at).toLocaleDateString('ar-SA')}
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-semibold text-gray-800">{order.customer_name}</h3>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600">
                        <span className="flex items-center">
                          <Mail className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                          {order.customer_email}
                        </span>
                        <span className="flex items-center">
                          <Phone className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                          {order.customer_phone}
                        </span>
                      </div>
                      {order.company_name && (
                        <div className="flex items-center text-sm text-gray-600">
                          <Building className="w-4 h-4 ml-1 rtl:ml-0 rtl:mr-1" />
                          {order.company_name}
                        </div>
                      )}
                      <div className="text-sm text-gray-600">
                        المنتجات: {order.items.length} منتج
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="lg:col-span-1">
            {selectedOrder ? (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">تفاصيل الطلب #{selectedOrder.id}</h3>
                  
                  {/* Customer Info */}
                  <div className="space-y-3 mb-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700">اسم العميل</label>
                      <p className="text-gray-900">{selectedOrder.customer_name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">البريد الإلكتروني</label>
                      <p className="text-gray-900">{selectedOrder.customer_email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">رقم الهاتف</label>
                      <p className="text-gray-900">{selectedOrder.customer_phone}</p>
                    </div>
                    {selectedOrder.company_name && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">الشركة</label>
                        <p className="text-gray-900">{selectedOrder.company_name}</p>
                      </div>
                    )}
                    {selectedOrder.message && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">الرسالة</label>
                        <p className="text-gray-900">{selectedOrder.message}</p>
                      </div>
                    )}
                  </div>

                  {/* Products */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">المنتجات المطلوبة</h4>
                    <div className="space-y-2">
                      {selectedOrder.items.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-gray-800">{item.product_name}</p>
                              <p className="text-sm text-gray-600">الباركود: {item.product_barcode}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-gray-800">الكمية: {item.quantity}</p>
                              <p className="text-sm text-gray-600">${item.price}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Update */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">تحديث الحالة</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {['new', 'processing', 'contacted', 'shipped', 'completed', 'cancelled'].map((status) => (
                        <Button
                          key={status}
                          variant={selectedOrder.status === status ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => updateOrderStatus(selectedOrder.id, status)}
                          className="text-xs"
                        >
                          {status}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-800 mb-3">الملاحظات</h4>
                    <div className="space-y-2 mb-4">
                      {selectedOrder.notes.map((note) => (
                        <div key={note.id} className="bg-blue-50 rounded-lg p-3">
                          <p className="text-sm text-gray-800">{note.note}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(note.created_at).toLocaleString('ar-SA')}
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    {/* Add Note */}
                    <div className="space-y-2">
                      <textarea
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="أضف ملاحظة جديدة..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                      />
                      <Button
                        onClick={() => addNote(selectedOrder.id)}
                        disabled={!newNote.trim()}
                        size="sm"
                        className="w-full"
                      >
                        إضافة ملاحظة
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-center text-gray-500">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>اختر طلباً لعرض التفاصيل</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
