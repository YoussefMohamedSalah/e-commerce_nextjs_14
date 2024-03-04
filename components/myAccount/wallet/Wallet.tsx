import React from 'react';
import { useTranslations } from "next-intl";

interface Props {
	data: any;
};

export default function Wallet({ data }: Props) {
	const t = useTranslations("Account");

	return (
		<>
			<div className="col-lg-9">
				<div className="profile-wrapper pt-4">
					<div className="fz20 fw-600 text-black mb-3">{t('my-wallet')}</div>
					<div className="fz14 text-secondary mb-3">{t('manage-wallet')}</div>
					<div className="border rounded10 p-3 mb-4">
						<div className="d-md-flex justify-content-between align-items-center text-center gap-3 ">
							<div className="fz16 text-black fw-600 mb-md-0 mb-3">{t('total-balance')}: <span className="text-blue">{data.total}</span>
							</div>
							<button data-bs-target="#charge-wallet-modal" data-bs-toggle="modal"
								className="btn px-3 py-1 border rounded50 bg-transparent fz14 text-black fw-normal d-inline-flex align-items-center hover-bg-secondary ">
								{t('charge-wallet')}
								<svg className="m-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
									viewBox="0 0 24 24" fill="none">
									<path d="M17 22.75H7C3.56 22.75 1.25 20.44 1.25 17V12C1.25 8.92 3.15 6.69001 6.1 6.32001C6.38 6.28001 6.69 6.25 7 6.25H17C17.24 6.25 17.55 6.26 17.87 6.31C20.82 6.65 22.75 8.89 22.75 12V17C22.75 20.44 20.44 22.75 17 22.75ZM7 7.75C6.76 7.75 6.53 7.76999 6.3 7.79999C4.1 8.07999 2.75 9.68 2.75 12V17C2.75 19.58 4.42 21.25 7 21.25H17C19.58 21.25 21.25 19.58 21.25 17V12C21.25 9.66 19.88 8.05001 17.66 7.79001C17.42 7.75001 17.21 7.75 17 7.75H7Z"
										fill="#161616" />
									<path d="M6.192 7.81044C5.952 7.81044 5.732 7.70044 5.582 7.50044C5.412 7.27044 5.392 6.97044 5.522 6.72044C5.692 6.38044 5.932 6.05044 6.242 5.75044L9.492 2.49043C11.152 0.84043 13.852 0.84043 15.512 2.49043L17.262 4.26045C18.002 4.99045 18.452 5.97045 18.502 7.01045C18.512 7.24045 18.422 7.46043 18.252 7.61043C18.082 7.76043 17.852 7.83045 17.632 7.79045C17.432 7.76045 17.222 7.75044 17.002 7.75044H7.002C6.762 7.75044 6.532 7.77043 6.302 7.80043C6.272 7.81043 6.232 7.81044 6.192 7.81044ZM7.862 6.25044H16.822C16.692 5.91044 16.482 5.60045 16.202 5.32045L14.442 3.54045C13.372 2.48045 11.622 2.48045 10.542 3.54045L7.862 6.25044Z"
										fill="#161616" />
									<path d="M22 17.25H19C17.48 17.25 16.25 16.02 16.25 14.5C16.25 12.98 17.48 11.75 19 11.75H22C22.41 11.75 22.75 12.09 22.75 12.5C22.75 12.91 22.41 13.25 22 13.25H19C18.31 13.25 17.75 13.81 17.75 14.5C17.75 15.19 18.31 15.75 19 15.75H22C22.41 15.75 22.75 16.09 22.75 16.5C22.75 16.91 22.41 17.25 22 17.25Z"
										fill="#161616" />
								</svg>
							</button>
						</div>
					</div>
					<div className="fz16 fw-600 text-primary mb-3">{t('balance-activity')} <small
						className="bg-secondary rounded50 px-3 py-1 ms-3">{data.count}</small></div>
					<div className="balance-activity-table">
						<table>
							<thead>
								<tr>
									<th scope="col">{t('date')}</th>
									<th scope="col">{t('id')}</th>
									<th scope="col">{t('price')}</th>
									<th scope="col">{t('activity')}</th>
								</tr>
							</thead>
							<tbody>
								{data && data.data && data.data.map((action: any, index: number) => {
									return (
										<tr key={index}>
											<td data-label="Date">{action?.data!}</td>
											<td data-label="Id">#{action?.id!}</td>
											<td data-label="Price" className="text-error">{action?.price!}</td>
											<td data-label="Activity">{action?.name!}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
			{/* forms */}
			{/* <!--Edit personal information Modal--> */}
			{/* <div className="modal fade" id="charge-wallet-modal" tabIndex={-1} aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">

						<div className="modal-header p-0 mb24">
							<h1 className="modal-title fz20 fw-600">Charge My Wallet</h1>
							<button type="button" className="close btn p-0 shadow-none border-0" data-bs-dismiss="modal"
								aria-label="Close">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M18.0006 6.92319L6.92368 18.0001C6.67137 18.2524 6.25291 18.2524 6.0006 18.0001C5.74829 17.7478 5.74829 17.3293 6.0006 17.077L17.0775 6.00011C17.3298 5.7478 17.7483 5.7478 18.0006 6.00011C18.2529 6.25242 18.2529 6.67088 18.0006 6.92319Z"
										fill="#161616" />
									<path d="M6.92368 5.99989L18.0006 17.0768C18.2529 17.3291 18.2529 17.7476 18.0006 17.9999C17.7483 18.2522 17.3298 18.2522 17.0775 17.9999L6.0006 6.92296C5.74829 6.67066 5.74829 6.25219 6.0006 5.99989C6.25291 5.74758 6.67137 5.74758 6.92368 5.99989Z"
										fill="#161616" />
								</svg>
							</button>
						</div>

						<div className="modal-body p-0">
							<form action="" className="text-black">

								<div className="row">
									<div className="col-12">
										<div className="input-wrapper">
											<label className="fz16 fw-500  d-block mb-2">Enter the value</label>
											<div className="choose-currency input-group">
												<input type="text" className="form-control mb24" placeholder="Ex: 50 EGP" />
												<select className="nice-select custom-nice-select text-blue">
													<option value="">EGP</option>
													<option value="">USD</option>
													<option value="">AED</option>
												</select>
											</div>

										</div>
									</div>

									<div className="col-12">
										<div className="fz16 fw-500 text-primary mb-2rem">Pay with</div>
										<div className="payment-methods">

											<div className="single-payment-method custom-radio">
												<div className="form-check align-items-center">
													<input className="form-check-input mt-0" type="radio" name="payment_methods" id="method_2" />
													<label className="form-check-label" htmlFor="method_2">
														<span className="gap-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="26" height="18"
																viewBox="0 0 26 18"
																fill="none">
																<path d="M3 0.25C1.75736 0.25 0.75 1.25736 0.75 2.5V15.5C0.75 16.7426 1.75736 17.75 3 17.75H23C24.2426 17.75 25.25 16.7426 25.25 15.5V2.5C25.25 1.25736 24.2426 0.25 23 0.25H3Z"
																	fill="white" stroke="#CAD2DB" strokeWidth="0.5" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M14.9301 6.82153C14.6973 6.73515 14.3326 6.64258 13.877 6.64258C12.716 6.64258 11.898 7.22057 11.8911 8.04893C11.8846 8.66129 12.475 9.00294 12.9207 9.20679C13.378 9.41561 13.5318 9.54885 13.5296 9.73539C13.5268 10.021 13.1644 10.1516 12.8266 10.1516C12.3564 10.1516 12.1066 10.087 11.7207 9.92788L11.5692 9.86013L11.4043 10.8141C11.6788 10.9331 12.1862 11.0362 12.7132 11.0415C13.9483 11.0415 14.7502 10.4701 14.7593 9.5855C14.7637 9.10074 14.4506 8.73174 13.7728 8.42765C13.3621 8.23049 13.1106 8.0989 13.1132 7.89929C13.1132 7.72214 13.3261 7.53274 13.7861 7.53274C14.1704 7.52687 14.4487 7.60965 14.6655 7.69602L14.7708 7.74516L14.9301 6.82153Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M16.4932 9.46753C16.5904 9.22197 16.9614 8.27621 16.9614 8.27621C16.9544 8.28756 17.0578 8.0295 17.1172 7.8695L17.1966 8.23694C17.1966 8.23694 17.4216 9.25422 17.4686 9.46753H16.4932ZM17.9422 6.7207H17.0342C16.7529 6.7207 16.5424 6.79654 16.4189 7.07411L14.6738 10.9797H15.9076C15.9076 10.9797 16.1095 10.4545 16.1551 10.3393C16.2899 10.3393 17.4885 10.341 17.6599 10.341C17.6951 10.4902 17.8028 10.9797 17.8028 10.9797H18.8931L17.9422 6.7207Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M8.50777 6.71973L7.35736 9.62591L7.23481 9.03527C7.02068 8.35442 6.35344 7.61683 5.60742 7.24759L6.65932 10.9746L7.90255 10.9732L9.75241 6.71973H8.50777Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M6.29059 6.7168H4.39589L4.38086 6.80545C5.85498 7.15821 6.83033 8.01074 7.23521 9.03495L6.82323 7.07657C6.75204 6.80676 6.54576 6.72619 6.29059 6.7168Z"
																	fill="#F9A51A" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M10.2288 6.71582L9.49414 10.9776H10.6687L11.4038 6.71582H10.2288Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M1 2.5C1 1.39543 1.89543 0.5 3 0.5H23C24.1046 0.5 25 1.39543 25 2.5V5.5H1V2.5Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M25 15.5C25 16.6046 24.1046 17.5 23 17.5L3 17.5C1.89543 17.5 1 16.6046 1 15.5V12.5L25 12.5V15.5Z"
																	fill="#F9A51A" />
															</svg>
															<span className="fz16 fw-normal  ">•••• 6754</span>
														</span>
													</label>
												</div>
												<div className="expire-date fz16 fw-normal text-black-50">
													Expires 06/2021
												</div>

											</div>

											<div className="single-payment-method custom-radio">
												<div className="form-check align-items-center">
													<input className="form-check-input mt-0" type="radio" name="payment_methods" id="method_3" />
													<label className="form-check-label" htmlFor="method_3">
														<span className="gap-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="26" height="18"
																viewBox="0 0 26 18"
																fill="none">
																<path d="M3 0.25C1.75736 0.25 0.75 1.25736 0.75 2.5V15.5C0.75 16.7426 1.75736 17.75 3 17.75H23C24.2426 17.75 25.25 16.7426 25.25 15.5V2.5C25.25 1.25736 24.2426 0.25 23 0.25H3Z"
																	fill="white" stroke="#CAD2DB" strokeWidth="0.5" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M14.9301 6.82153C14.6973 6.73515 14.3326 6.64258 13.877 6.64258C12.716 6.64258 11.898 7.22057 11.8911 8.04893C11.8846 8.66129 12.475 9.00294 12.9207 9.20679C13.378 9.41561 13.5318 9.54885 13.5296 9.73539C13.5268 10.021 13.1644 10.1516 12.8266 10.1516C12.3564 10.1516 12.1066 10.087 11.7207 9.92788L11.5692 9.86013L11.4043 10.8141C11.6788 10.9331 12.1862 11.0362 12.7132 11.0415C13.9483 11.0415 14.7502 10.4701 14.7593 9.5855C14.7637 9.10074 14.4506 8.73174 13.7728 8.42765C13.3621 8.23049 13.1106 8.0989 13.1132 7.89929C13.1132 7.72214 13.3261 7.53274 13.7861 7.53274C14.1704 7.52687 14.4487 7.60965 14.6655 7.69602L14.7708 7.74516L14.9301 6.82153Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M16.4932 9.46753C16.5904 9.22197 16.9614 8.27621 16.9614 8.27621C16.9544 8.28756 17.0578 8.0295 17.1172 7.8695L17.1966 8.23694C17.1966 8.23694 17.4216 9.25422 17.4686 9.46753H16.4932ZM17.9422 6.7207H17.0342C16.7529 6.7207 16.5424 6.79654 16.4189 7.07411L14.6738 10.9797H15.9076C15.9076 10.9797 16.1095 10.4545 16.1551 10.3393C16.2899 10.3393 17.4885 10.341 17.6599 10.341C17.6951 10.4902 17.8028 10.9797 17.8028 10.9797H18.8931L17.9422 6.7207Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M8.50777 6.71973L7.35736 9.62591L7.23481 9.03527C7.02068 8.35442 6.35344 7.61683 5.60742 7.24759L6.65932 10.9746L7.90255 10.9732L9.75241 6.71973H8.50777Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M6.29059 6.7168H4.39589L4.38086 6.80545C5.85498 7.15821 6.83033 8.01074 7.23521 9.03495L6.82323 7.07657C6.75204 6.80676 6.54576 6.72619 6.29059 6.7168Z"
																	fill="#F9A51A" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M10.2288 6.71582L9.49414 10.9776H10.6687L11.4038 6.71582H10.2288Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M1 2.5C1 1.39543 1.89543 0.5 3 0.5H23C24.1046 0.5 25 1.39543 25 2.5V5.5H1V2.5Z"
																	fill="#00579F" />
																<path fillRule="evenodd" clipRule="evenodd"
																	d="M25 15.5C25 16.6046 24.1046 17.5 23 17.5L3 17.5C1.89543 17.5 1 16.6046 1 15.5V12.5L25 12.5V15.5Z"
																	fill="#F9A51A" />
															</svg>
															<span className="fz16 fw-normal  ">•••• 6754</span>
														</span>
													</label>
												</div>
												<div className="expire-date fz16 fw-normal text-black-50">
													Expires 06/2021
												</div>

											</div>

											<a className="fz16 d-flex gap-3 hover-link mb24 fw-500" href="#add-payment-method-modal"
												data-bs-toggle="modal">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M12 5V19" stroke="#264AEC" strokeWidth="2" strokeLinecap="round"
														strokeLinejoin="round" />
													<path d="M5 12H19" stroke="#264AEC" strokeWidth="2" strokeLinecap="round"
														strokeLinejoin="round" />
												</svg>
												Add Payment method
											</a>

										</div>
									</div>

								</div>

								<div className="d-flex gap-3">
									<a href="#" className="btn btn-primary rounded10 flex-grow-1  fz14 ">Charge</a>

								</div>
							</form>
						</div>

					</div>
				</div>
			</div> */}

			{/* <!--Add new payment method Modal--> */}
			{/* <div className="modal fade" id="add-payment-method-modal" tabIndex={-1} aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">

						<div className="modal-header p-0 mb24">
							<h1 className="modal-title fz20 fw-600">Add new payment method </h1>
							<button type="button" className="close btn p-0 shadow-none border-0" data-bs-dismiss="modal"
								aria-label="Close">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M18.0006 6.92319L6.92368 18.0001C6.67137 18.2524 6.25291 18.2524 6.0006 18.0001C5.74829 17.7478 5.74829 17.3293 6.0006 17.077L17.0775 6.00011C17.3298 5.7478 17.7483 5.7478 18.0006 6.00011C18.2529 6.25242 18.2529 6.67088 18.0006 6.92319Z"
										fill="#161616" />
									<path d="M6.92368 5.99989L18.0006 17.0768C18.2529 17.3291 18.2529 17.7476 18.0006 17.9999C17.7483 18.2522 17.3298 18.2522 17.0775 17.9999L6.0006 6.92296C5.74829 6.67066 5.74829 6.25219 6.0006 5.99989C6.25291 5.74758 6.67137 5.74758 6.92368 5.99989Z"
										fill="#161616" />
								</svg>
							</button>
						</div>

						<div className="modal-body p-0">
							<form action="" className="text-black">

								<div className="row">
									<div className="col-12">
										<div className="input-wrapper">
											<input type="text" className="form-control mb24" placeholder="Card number" />
										</div>
									</div>
									<div className="col-12">
										<div className="input-wrapper">
											<input type="text" className="form-control mb24" placeholder="Name on card" />
										</div>
									</div>
									<div className="col-md-9 col-7">
										<div className="input-wrapper">
											<input type="text" className="form-control mb24" placeholder="Expiration date" />
										</div>
									</div>
									<div className="col-md-3 col-5">
										<div className="input-wrapper">
											<input type="text" className="form-control mb24" placeholder="CCV" />
										</div>
									</div>
								</div>

								<a href="#" className="btn btn-primary rounded10 w-100 fz14 ">Save</a>
							</form>
						</div>

					</div>
				</div>
			</div> */}
		</>
	)
}
