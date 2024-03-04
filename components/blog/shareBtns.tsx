"use client";

export default function ShareBtns() {
  const copyToClipboard = (e: any) => {
    navigator.clipboard.writeText(window.location.toString());
  };

  return (
    <div className="share">
      <a id="copyURL" onClick={copyToClipboard}>
        Copy link
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M13.125 14.375V17.1875C13.125 17.7053 12.7053 18.125 12.1875 18.125H4.0625C3.54473 18.125 3.125 17.7053 3.125 17.1875V6.5625C3.125 6.04473 3.54473 5.625 4.0625 5.625H5.625C6.05089 5.625 6.46849 5.6605 6.875 5.7287M13.125 14.375H15.9375C16.4553 14.375 16.875 13.9553 16.875 13.4375V9.375C16.875 5.65876 14.1721 2.5738 10.625 1.9787C10.2185 1.9105 9.80089 1.875 9.375 1.875H7.8125C7.29473 1.875 6.875 2.29473 6.875 2.8125V5.7287M13.125 14.375H7.8125C7.29473 14.375 6.875 13.9553 6.875 13.4375V5.7287M16.875 11.25V9.6875C16.875 8.1342 15.6158 6.875 14.0625 6.875H12.8125C12.2947 6.875 11.875 6.45527 11.875 5.9375V4.6875C11.875 3.1342 10.6158 1.875 9.0625 1.875H8.125"
            stroke="#161616"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a href="#">
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
      <a href="#">
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
    </div>
  );
}
