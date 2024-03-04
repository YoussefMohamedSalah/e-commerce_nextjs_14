import React from 'react';
import CopySvg from '../svg/copy';

interface Props {
    onCancel: () => void;
    show: boolean;
};

const ShareModal = ({ show, onCancel }: Props) => {
    const copyToClipboard = (e: any) => {
        navigator.clipboard.writeText(window.location.toString())
    };
    return (
        <div className={`share-modal modal fade ${show ? "show" : ""}`} id="remove-address-modal" tabIndex={-1} aria-hidden="true" style={{ display: `${show ? "block" : "none"}`, background: 'rgba(0, 0, 0, 0.16)' }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header p-0 mb24">
                        <h1 className="modal-title fz20 fw-600">share_this_product</h1>
                        <button type="button" className="close btn p-0 shadow-none border-0" data-bs-dismiss="modal"
                            aria-label="Close" onClick={onCancel}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18.0006 6.92319L6.92368 18.0001C6.67137 18.2524 6.25291 18.2524 6.0006 18.0001C5.74829 17.7478 5.74829 17.3293 6.0006 17.077L17.0775 6.00011C17.3298 5.7478 17.7483 5.7478 18.0006 6.00011C18.2529 6.25242 18.2529 6.67088 18.0006 6.92319Z"
                                    fill="#161616" />
                                <path d="M6.92368 5.99989L18.0006 17.0768C18.2529 17.3291 18.2529 17.7476 18.0006 17.9999C17.7483 18.2522 17.3298 18.2522 17.0775 17.9999L6.0006 6.92296C5.74829 6.67066 5.74829 6.25219 6.0006 5.99989C6.25291 5.74758 6.67137 5.74758 6.92368 5.99989Z"
                                    fill="#161616" />
                            </svg>
                        </button>
                    </div>

                    <div className="modal-body p-0 share-icons mt-6">
                        <a href="">
                            <svg
                                className="hover"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M16.3086 12.875L16.8008 9.64062H13.6719V7.53125C13.6719 6.61719 14.0938 5.77344 15.5 5.77344H16.9414V2.99609C16.9414 2.99609 15.6406 2.75 14.4102 2.75C11.8438 2.75 10.1562 4.33203 10.1562 7.14453V9.64062H7.27344V12.875H10.1562V20.75H13.6719V12.875H16.3086Z"
                                    fill="#161616"
                                />
                            </svg>
                        </a>
                        <a href="">
                            <svg
                                className="hover"
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="24"
                                viewBox="0 0 25 24"
                                fill="none"
                            >
                                <path
                                    d="M19.6367 8.09375C20.3398 7.56641 20.9727 6.93359 21.4648 6.19531C20.832 6.47656 20.0938 6.6875 19.3555 6.75781C20.1289 6.30078 20.6914 5.59766 20.9727 4.71875C20.2695 5.14062 19.4609 5.45703 18.6523 5.63281C17.9492 4.89453 17 4.47266 15.9453 4.47266C13.9062 4.47266 12.2539 6.125 12.2539 8.16406C12.2539 8.44531 12.2891 8.72656 12.3594 9.00781C9.30078 8.83203 6.55859 7.35547 4.73047 5.14062C4.41406 5.66797 4.23828 6.30078 4.23828 7.00391C4.23828 8.26953 4.87109 9.39453 5.89062 10.0625C5.29297 10.0273 4.69531 9.88672 4.20312 9.60547V9.64062C4.20312 11.4336 5.46875 12.9102 7.15625 13.2617C6.875 13.332 6.52344 13.4023 6.20703 13.4023C5.96094 13.4023 5.75 13.3672 5.50391 13.332C5.96094 14.8086 7.33203 15.8633 8.94922 15.8984C7.68359 16.8828 6.10156 17.4805 4.37891 17.4805C4.0625 17.4805 3.78125 17.4453 3.5 17.4102C5.11719 18.4648 7.05078 19.0625 9.16016 19.0625C15.9453 19.0625 19.6367 13.4727 19.6367 8.58594C19.6367 8.41016 19.6367 8.26953 19.6367 8.09375Z"
                                    fill="#161616"
                                />
                            </svg>
                        </a>
                        <a id="copyURL" onClick={copyToClipboard}>
                            <CopySvg className="mx-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
