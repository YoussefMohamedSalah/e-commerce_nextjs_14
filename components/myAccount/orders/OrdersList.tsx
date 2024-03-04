"use client";
import React, { useState } from "react";
import Image from "@/components/ui/image";
import NoOrdersMessage from "../NoOrders";
import { formatText } from "@/utils/formatProductName";
import Logo from "@/components/ui/logo";

interface Props {
  data: any;
  tOrder: any;
};

const OrdersList = ({ data, tOrder }: Props) => {
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

  const {
    name,
    date,
    price,
    status,
    action,
    refund,
    cancel_order,
    invoice,
    tDelete,
    no_orders,
    delete_order_msg,
    yes,
    no,
    cancel_order_msg,
    invoice_no,
    issued_on,
    issued_num,
    total,
    payment_due
  } = tOrder;
  return (
    <>
      {data && data.data && data?.data?.length! > 0 ? (
        <>
          <div className="orders-table">
            <table>
              <thead>
                <tr>
                  <th scope="col">{tOrder.id}</th>
                  <th scope="col">{name}</th>
                  <th scope="col">{date}</th>
                  <th scope="col">{price}</th>
                  <th scope="col">{status}</th>
                  <th scope="col">{action}</th>
                </tr>
              </thead>
              <tbody>
                {data?.data?.map((order: any) => {
                  return (
                    <tr key={`order--key-${order.id}`}>
                      <td data-label="Id">#{order.order_number}</td>
                      <td data-label="Name">
                        {formatText(order.products[0].name, 30)}
                      </td>
                      <td data-label="Name">{order.created_at}</td>
                      <td data-label="Price">{Number(order.paid_total).toFixed(2)}</td>
                      <td data-label="Statue" className="text-success">
                        {order.status.name}
                      </td>
                      <td data-label="Action">
                        <div className="dropdown user-order-actions d-inline-block position-relative">
                          <a
                            href="#"
                            data-bs-display="static"
                            role="button"
                            data-bs-toggle="dropdown"
                          >
                            <Image
                              src="/assets/icons/v-dots.png"
                              className="img-fluid"
                              width={20}
                              height={20}
                              alt=""
                            />
                          </a>
                          <ul className="dropdown-menu end-0 dropdown-menu-end ">
                            {/* <li>
                              <a className="dropdown-item text-error" href="#">
                                {refund}
                              </a>
                            </li> */}
                            {/* <li>
                              <a
                                className="dropdown-item"
                                href="#cancel-order-modal"
                                data-bs-toggle="modal"
                              >
                                {cancel_order}
                              </a>
                            </li> */}
                            <li>
                              <a
                                className="dropdown-item text-blue"
                                href="#invoice-modal"
                                data-bs-toggle="modal"
                                onClick={() => setSelectedOrder(order)}
                              >
                                {invoice}
                              </a>
                            </li>
                            {/* <li>
                              <a
                                className="dropdown-item"
                                href="#delete-order-modal"
                                data-bs-toggle="modal"
                              >
                                {tDelete}
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* forms */}
          {/* <!--Delete order Modal--> */}
          <div
            className="modal fade"
            id="delete-order-modal"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header p-0 mb24">
                  <h1 className="modal-title fz20 fw-600">{delete_order_msg}</h1>
                  <button
                    type="button"
                    className="close btn p-0 shadow-none border-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.0006 6.92319L6.92368 18.0001C6.67137 18.2524 6.25291 18.2524 6.0006 18.0001C5.74829 17.7478 5.74829 17.3293 6.0006 17.077L17.0775 6.00011C17.3298 5.7478 17.7483 5.7478 18.0006 6.00011C18.2529 6.25242 18.2529 6.67088 18.0006 6.92319Z"
                        fill="#161616"
                      />
                      <path
                        d="M6.92368 5.99989L18.0006 17.0768C18.2529 17.3291 18.2529 17.7476 18.0006 17.9999C17.7483 18.2522 17.3298 18.2522 17.0775 17.9999L6.0006 6.92296C5.74829 6.67066 5.74829 6.25219 6.0006 5.99989C6.25291 5.74758 6.67137 5.74758 6.92368 5.99989Z"
                        fill="#161616"
                      />
                    </svg>
                  </button>
                </div>

                <div className="modal-body p-0">
                  <form action="" className="text-black">
                    <div className="d-flex justify-content-center gap-4 mt-5">
                      <a
                        href="#"
                        className="btn btn-green rounded10 flex-grow-1 py-3 fz16 "
                      >
                        {yes}
                      </a>
                      <a
                        href="#"
                        className="btn btn-red rounded10 flex-grow-1 py-3 fz16 "
                      >
                        {no}
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Delete order Modal--> */}
          <div
            className="modal fade"
            id="cancel-order-modal"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content">
                <div className="modal-header p-0 mb24">
                  <h1 className="modal-title fz20 fw-600">{cancel_order_msg}</h1>
                  <button
                    type="button"
                    className="close btn p-0 shadow-none border-0"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18.0006 6.92319L6.92368 18.0001C6.67137 18.2524 6.25291 18.2524 6.0006 18.0001C5.74829 17.7478 5.74829 17.3293 6.0006 17.077L17.0775 6.00011C17.3298 5.7478 17.7483 5.7478 18.0006 6.00011C18.2529 6.25242 18.2529 6.67088 18.0006 6.92319Z"
                        fill="#161616"
                      />
                      <path
                        d="M6.92368 5.99989L18.0006 17.0768C18.2529 17.3291 18.2529 17.7476 18.0006 17.9999C17.7483 18.2522 17.3298 18.2522 17.0775 17.9999L6.0006 6.92296C5.74829 6.67066 5.74829 6.25219 6.0006 5.99989C6.25291 5.74758 6.67137 5.74758 6.92368 5.99989Z"
                        fill="#161616"
                      />
                    </svg>
                  </button>
                </div>

                <div className="modal-body p-0">
                  <form action="" className="text-black">
                    <div className="d-flex justify-content-center gap-4 mt-5">
                      <a
                        href="#"
                        className="btn btn-green rounded10 flex-grow-1 py-3 fz16 "
                      >
                        {yes}
                      </a>
                      <a
                        href="#"
                        className="btn btn-red rounded10 flex-grow-1 py-3 fz16 "
                      >
                        {no}
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Invoice Modal--> */}
          <div
            className="invoice-modal modal fade"
            id="invoice-modal"
            tabIndex={-1}
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-lg">
              {selectedOrder && <>
                <div className="modal-content p-0 rounded10">
                  <div className="modal-header p-0 mb24 bg-primary p-4 text-white d-block">
                    <div className="top d-flex justify-content-between align-items-center mb-4">
                      <h1 className="modal-title fz20 fw-bolder">{invoice}</h1>
                      <button
                        type="button"
                        className="close btn p-0 shadow-none border-0"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M18.0006 6.9227L6.92368 17.9996C6.67137 18.2519 6.25291 18.2519 6.0006 17.9996C5.74829 17.7473 5.74829 17.3289 6.0006 17.0765L17.0775 5.99962C17.3298 5.74732 17.7483 5.74732 18.0006 5.99962C18.2529 6.25193 18.2529 6.67039 18.0006 6.9227Z"
                            fill="white"
                          />
                          <path
                            d="M6.92368 6.00037L18.0006 17.0773C18.2529 17.3296 18.2529 17.7481 18.0006 18.0004C17.7483 18.2527 17.3298 18.2527 17.0775 18.0004L6.0006 6.92345C5.74829 6.67114 5.74829 6.25268 6.0006 6.00038C6.25291 5.74807 6.67137 5.74807 6.92368 6.00037Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                      <div className="text-center">
                        <small className="fz10 text-disabled d-block">
                          {invoice_no}
                        </small>
                        <span className="fz13 fw-bolder">#{selectedOrder ? selectedOrder?.order_number! : ""}</span>
                      </div>
                    </div>
                    <div className="bottom d-flex justify-content-between align-items-center">
                      <div className="text-start ">
                        <span className="fz10 text-disabled d-block">
                          {issued_on}
                        </span>
                        <small className="fz14 fw-600 d-block">{selectedOrder?.created_at!}</small>
                        {/* <span className="fz10">#000123</span> */}
                      </div>
                      <div className="text-end">
                        <span className="fz10 text-disabled d-block">
                          {issued_num}
                        </span>
                        <span className="fz10 mb-2 d-block">#{selectedOrder.id}</span>
                        <span className="fz10 text-disabled d-block">
                          {payment_due}
                        </span>
                        <span className="fz10 d-block">.</span>
                      </div>
                    </div>
                  </div>
                  <div className="modal-body p-4">
                    <div className="invoice-products-table">
                      <table>
                        <thead>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Qty.</th>
                            <th scope="col">Price</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedOrder?.products.map((product: any, index: number) => {
                            return (
                              <tr key={index}>
                                <td data-label="Product">{product.name!}</td>
                                <td data-label="Qty">{product.quantity!}</td>
                                <td data-label="Price">KWD&nbsp;{product.price!.toFixed(3)}</td>
                                <td data-label="Total">KWD&nbsp;{product.total!.toFixed(3)}</td>
                              </tr>
                            )
                          })}
                          <tr>
                            <td colSpan={2}></td>
                            <td className="p-1"><strong>Price</strong></td>
                            <td className="p-1"><strong>KWD&nbsp;{selectedOrder?.total!.toFixed(3)}</strong></td>
                          </tr>
                          <tr>
                            <td colSpan={2}></td>
                            <td className="p-1"><strong>Discount</strong></td>
                            <td className="p-1"><strong>KWD&nbsp;0.000</strong></td>
                          </tr>
                          <tr>
                            <td colSpan={2}></td>
                            <td className="p-1"><strong>Shipping</strong></td>
                            <td className="p-1"><strong>KWD&nbsp;{(Number(selectedOrder?.paid_total!) - Number(selectedOrder?.total!)).toFixed(3)}</strong></td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="total-wrapper text-end mt100">
                        <div className="total">
                          <div><span className="fz10 text-disabled me-1">Total</span><span className="fz10">(KWD)</span></div>
                          <div className="fz16 fw-bolder">KWD&nbsp;{selectedOrder ? Number(selectedOrder?.paid_total!).toFixed(3) : 0.000}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer justify-content-center mt-4 border-0">
                    <div className="text-center">
                      <Logo />
                      {/* <div className="fz14 fw-bolder">A2Z Mega Store</div> */}
                    </div>
                  </div>
                </div>
              </>}
            </div>
          </div>
        </>
      ) : (
        <NoOrdersMessage title={`${no_orders}`} />
      )}
    </>
  );
};

export default OrdersList;


