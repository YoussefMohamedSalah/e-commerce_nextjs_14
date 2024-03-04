"use client"
import React, { useState } from 'react';
import NoShippingAddresses from './NoShippingAddress';
import AddressModal from './AddressModal';
import DeleteAddressModal from './DeleteAddressModal';
import { BASE_API_URL } from '@/constants/baseUrl';
import { AddressType } from './ShippingAddressContent';
import { Session } from "@/types/session";


interface Props {
    addresses: AddressType[];
    lang: string;
    tCart: any;
    tShipping: any;
    handleSelect: (address: any) => void;
    session: Session | null;
};

const AddressesList = ({ addresses, lang, tCart, tShipping, handleSelect, session }: Props) => {
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [isAddModal, setIsAddModal] = useState<boolean>(false);
    const [isEditModal, setIsEditModal] = useState<boolean>(false);
    const [selectedAddress, setSelectedAddress] = useState<AddressType | null>(null);

    // setIsEditModal
    const handleDeleteAddress = async () => {
        if (!session || !selectedAddress) return null;
        try {
            const favoritesUrl = `${BASE_API_URL}/addresses/${selectedAddress.id}`;
            const res = await fetch(`${favoritesUrl}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Accept-Language": `${lang}`,
                    Accept: "application/json",
                    Authorization: `Bearer ${session?.user?.token!}`,
                },
            });
            if (!res.ok) {
                throw new Error("Failed to fetch Checkout");
            }
            handleCloseModal()
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };

    const handleUpdateAddress = async (data: any) => {
        if (!session) return null;
        try {
            const favoritesUrl = `${BASE_API_URL}/addresses`;
            const res = await fetch(`${favoritesUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${session?.user?.token!}`,
                },
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                throw new Error("Failed to Edit Address");
            }
            handleCloseModal()
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };

    const handleCreateAddress = async (data: any) => {
        if (!session) return null;
        try {
            const favoritesUrl = `${BASE_API_URL}/addresses`;
            const res = await fetch(`${favoritesUrl}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: `Bearer ${session?.user?.token!}`,
                },
                body: JSON.stringify(data)
            });
            if (!res.ok) {
                throw new Error("Failed to Edit Address");
            }
            handleCloseModal();
            if (typeof window !== "undefined") {
                window.location.reload();
            }
        } catch (error) {
            console.error("Error:", error);
            return null;
        }
    };

    const handleCloseModal = () => {
        setSelectedAddress(null);
        setIsAddModal(false);
        setIsEditModal(false);
        setShowDeleteModal(false);
    };

    return (
        <div className="col-lg-8">
            <div className="row">
                <div className="text-secondary fz14 mb-5 fw-600">{tCart.select_address}</div>
                {addresses.length > 0 ? (
                    <div className="shipping-addresses">
                        {addresses.map((address) => {
                            return (
                                <>
                                    <div className="single-address custom-radio" key={address.id}>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="addresses" id="address_1" onChange={() => handleSelect(address)} />
                                            <label className="form-check-label" htmlFor="address_1" >
                                                <span className="fz24 fw-normal mb-3">{address.region}</span>
                                                <span className="fz16 fw-normal mb-3">{tCart.street} {address.city.name}, {address.country.name}, {tCart.postal_code} {address.zip_code}</span>
                                                <span className="fz16 fw-nor">{tCart.contact} {address.phone}</span>
                                            </label>
                                        </div>
                                        <div className="actions flex-shrink-0 d-flex pe-5 align-items-center">
                                            <button className="btn edit text-blue fz14 fw-500 d-flex align-items-center gap-3" onClick={() => {
                                                setSelectedAddress(address);
                                                setIsEditModal(true);
                                            }}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="icon"
                                                    width="25px"
                                                    height="25px"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path fill="currentColor" d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1m-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71m10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"></path>
                                                </svg>
                                                {tCart.edit}
                                            </button>
                                            <button className="remove-item btn text-error fz14 d-flex align-items-center gap-3" onClick={() => {
                                                setShowDeleteModal(true);
                                                setSelectedAddress(address)
                                            }}>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className="icon"
                                                    width="25px"
                                                    height="25px"
                                                    viewBox="0 0 256 256"
                                                >
                                                    <path fill="currentColor" d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16M96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0m48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0"></path>
                                                </svg>
                                                {tCart.remove}
                                            </button>
                                        </div>
                                    </div>
                                    {selectedAddress && isEditModal && (
                                        <AddressModal tShipping={tShipping} lang={lang} show={isEditModal} mode={'edit'} addressData={selectedAddress} onSave={handleUpdateAddress} onClose={handleCloseModal} session={session ? session : null} />
                                    )}
                                </>
                            )
                        })}
                    </div>
                ) : (
                    <NoShippingAddresses content={tCart.no_addresses_msg} />
                )}
                {isAddModal && (
                    <AddressModal tShipping={tShipping} lang={lang} show={isAddModal} mode={'add'} addressData={selectedAddress} onSave={handleCreateAddress} onClose={handleCloseModal} session={session ? session : null} />
                )}
            </div>
            {/* Add New Address Btn */}
            <span role="button" className="add-new-address fz16 d-flex gap-3 hover-link fw-500 mb24" onClick={() => setIsAddModal(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="icon" width="25px" height="25px" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path>
                </svg>
                {tCart.add_address}
            </span>
            {selectedAddress && (
                <DeleteAddressModal tCart={tCart} show={showDeleteModal} onConfirm={handleDeleteAddress} onCancel={handleCloseModal} />
            )}
        </div>
    );
};

export default AddressesList;
