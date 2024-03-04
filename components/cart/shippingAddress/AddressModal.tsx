import { BASE_API_URL } from '@/constants/baseUrl';
import { Session } from "@/types/session";
import React, { useEffect, useState } from 'react';

interface Props {
	mode: string;
	addressData: any;
	show: boolean;
	onSave: (newAddress: any) => void;
	onClose: () => void;
	lang: string;
	tShipping: any;
	session: Session | null;
};

interface Country {
	id: number;
	name: string;
};

const AddressModal = ({ mode, addressData, show, onSave, onClose, lang, tShipping, session }: Props) => {
	const [region, setRegion] = useState(addressData ? addressData.region : '');
	const [street, setStreet] = useState(addressData ? addressData.street : '');
	const [country, setCountry] = useState(addressData ? addressData.country : '');
	const [city, setCity] = useState(addressData ? addressData.city : '');
	const [building, setBuilding] = useState(addressData ? addressData.building : '');
	const [floor, setFloor] = useState(addressData ? addressData.floor : '');
	const [apartment, setApartment] = useState(addressData ? addressData.apartment : '');
	const [postalCode, setPostalCode] = useState(addressData ? addressData.zip_code : '');
	const [phoneNumber, setPhoneNumber] = useState(addressData ? addressData.phone : '');
	const [notes, setNotes] = useState(addressData ? addressData.notes : '');
	// ----
	const [isInitialized, setIsInitialized] = useState<boolean>(false)
	const [countriesData, setCountriesData] = useState<Country[] | null>(null)
	const [citiesData, setCitiesData] = useState<Country[] | null>(null)


	const handleSave = (e: React.FormEvent) => {
		e.preventDefault();
		const newAddress = {
			...addressData,
			apartment,
			building,
			city_id: city,
			country_id: country,
			floor,
			notes,
			phone: phoneNumber,
			region,
			street,
			zip_code: postalCode,
		};
		onSave(newAddress);
	};

	useEffect(() => {
		if (!isInitialized) {
			getCountriesData();
			setIsInitialized(true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInitialized])

	useEffect(() => {
		if (country && country !== "") {
			getCitiesData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [country])

	const getCountriesData = async () => {
		if (!session) return null;

		try {
			const favoritesUrl = `${BASE_API_URL}/countries/list`;
			const res = await fetch(`${favoritesUrl}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${session?.user?.token!}`,
					"Accept-Language": `${lang}`
				},
			});
			if (!res.ok) {
				throw new Error(`Failed to fetch countries. Status: ${res.status}`);
			}
			setCity("")
			const data = await res.json();
			setCountriesData(data.data)
		} catch (error) {
			console.error("Error fetching countries:", error);
			// You might want to handle this error, e.g., show an error message to the user
			return null;
		}
	};

	const getCitiesData = async () => {
		if (!session) return null;
		if (!country) return;
		try {
			const favoritesUrl = `${BASE_API_URL}/country/${country}/cities/list`;
			const res = await fetch(`${favoritesUrl}`, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${session?.user?.token!}`,
					"Accept-Language": `${lang}`
				},
			});
			if (!res.ok) {
				throw new Error("Failed to fetch Checkout");
			}
			const data = await res.json();
			setCitiesData(data.data)
		} catch (error) {
			console.error("Error:", error);
			return null;
		}
	};

	return (
		<div className={`modal fade ${show ? 'show' : ''}`} id="add-address-modal" tabIndex={-1} aria-hidden="true" style={{ display: `${show ? 'block' : 'none'}`, background: 'rgba(0, 0, 0, 0.16)' }}>
			<div className="modal-dialog modal-dialog-centered modal-lg">
				<div className="modal-content">
					<div className="modal-header p-0 mb24">
						<h1 className="modal-title fz20 fw-600">{mode === 'add' ? `${tShipping.add_address}` : `${tShipping.edit_address}`}</h1>
						<button type="button" className="close btn p-0 shadow-none border-0" onClick={() => {
							setIsInitialized(true);
							onClose()
						}}>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z" fill="currentColor" />
							</svg>
						</button>
					</div>
					<div className="modal-body p-0">
						<form onSubmit={handleSave} className="text-black">
							<div className="row">
								<div className="col-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.region_name}</label>
										<input
											type="text"
											className="form-control"
											placeholder={`${tShipping.region_name_holder}`}
											value={region}
											onChange={(e) => setRegion(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.street_name}</label>
										<input
											type="text"
											className="form-control"
											placeholder={`${tShipping.street_name_holder}`}
											value={street}
											onChange={(e) => setStreet(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.country}</label>
										<select
											className="form-control"
											value={country.id}
											onChange={(e) => setCountry(e.target.value)}
										>
											<option value="">{tShipping.choose}</option>
											{countriesData && countriesData.map((country) => (
												<option value={country.id} key={country.id}>
													{country.name}
												</option>
											))}
										</select>
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.city}</label>
										<select
											className="form-control"
											value={city.id}
											onChange={(e) => setCity(e.target.value)}
										>
											<option value="">{tShipping.choose}</option>
											{citiesData && citiesData?.map((city) => {
												return (
													<option value={city.id} key={city.id}>
														{city.name}
													</option>
												)
											})}
										</select>
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.building}</label>
										<input
											type="number"
											className="form-control"
											placeholder={`${tShipping.building_holder}`}
											value={building}
											onChange={(e) => setBuilding(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.floor}</label>
										<input
											type="number"
											className="form-control"
											placeholder={`${tShipping.floor_holder}`}
											value={floor}
											onChange={(e) => setFloor(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.apartment}</label>
										<input
											type="text"
											className="form-control"
											placeholder={`${tShipping.apartment_holder}`}
											value={apartment}
											onChange={(e) => setApartment(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-6">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.postal_code}</label>
										<input
											type="text"
											className="form-control"
											placeholder={`${tShipping.postal_code_holder}`}
											value={postalCode}
											onChange={(e) => setPostalCode(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.phone_number}</label>
										<input
											type="text"
											className="form-control"
											placeholder={`${tShipping.phone_number_holder}`}
											value={phoneNumber}
											onChange={(e) => setPhoneNumber(e.target.value)}
										/>
									</div>
								</div>
								<div className="col-12">
									<div className="input-wrapper mb24 mb24">
										<label className="fz16 fw-500 d-block mb-2">{tShipping.notes}</label>
										<textarea
											className="form-control"
											placeholder={`${tShipping.notes_holder}`}
											value={notes}
											onChange={(e) => setNotes(e.target.value)}
										></textarea>
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-primary rounded10 w-100 fz14">
								{mode === 'add' ? `${tShipping.save}` : `${tShipping.update}`}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddressModal;
