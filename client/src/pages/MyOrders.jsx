import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NoData from '../components/NoData'

const MyOrders = () => {
  const orders = useSelector(state => state.orders.order)
  const [selectedOrder, setSelectedOrder] = useState(null)

  const handleOpenModal = (order) => setSelectedOrder(order)
  const handleCloseModal = () => setSelectedOrder(null)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md p-4 sticky top-0 z-10">
        <h1 className="text-xl font-semibold text-gray-800">My Orders</h1>
      </div>

      {/* Orders Section */}
      <div className="max-w-3xl mx-auto p-4">
        {!orders?.length && (
          <div className="mt-10">
            <NoData />
          </div>
        )}

        {orders.map((order, index) => (
          <div
            key={order._id + index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 p-4 hover:shadow-md transition-all duration-200 cursor-pointer"
            onClick={() => handleOpenModal(order)}
          >
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Order ID:</span> {order?.orderId}
              </p>
              <p className="text-sm text-green-600 font-semibold">
                {order?.status || 'Processing'}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={order.product_details.image[0]}
                alt={order.product_details.name}
                className="w-16 h-16 rounded-lg object-cover border"
              />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{order.product_details.name}</p>
                <p className="text-gray-500 text-xs mt-1">
                  ₹{order.product_details.price} × {order.quantity}
                </p>
              </div>
            </div>

            <div className="mt-3 border-t pt-2 text-xs text-gray-500 flex justify-between">
              <p>Placed on: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>Total: <span className="font-semibold text-gray-800">₹{order.totalAmt}</span></p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-[90%] max-w-lg relative animate-fadeIn">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg font-bold"
            >
              ×
            </button>

            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>

            <div className="flex gap-4 mb-4">
              <img
                src={selectedOrder.product_details.image[0]}
                alt={selectedOrder.product_details.name}
                className="w-24 h-24 rounded-lg object-cover border"
              />
              <div>
                <p className="font-semibold text-gray-800">{selectedOrder.product_details.name}</p>
                <p className="text-sm text-gray-500">
                  ₹{selectedOrder.product_details.price} × {selectedOrder.quantity}
                </p>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Order ID:</span> {selectedOrder.orderId}</p>
              <p><span className="font-medium">Status:</span> {selectedOrder.status || 'Processing'}</p>
              <p><span className="font-medium">Date:</span> {new Date(selectedOrder.createdAt).toLocaleDateString()}</p>
              <p><span className="font-medium">Total Amount:</span> ₹{selectedOrder.totalAmt}</p>
              {selectedOrder.shippingAddress && (
                <p><span className="font-medium">Delivery Address:</span> {selectedOrder.shippingAddress}</p>
              )}
            </div>

            <div className="mt-5 text-right">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyOrders
