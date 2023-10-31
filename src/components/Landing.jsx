import '../styles/landing.css'

export default function Landing () {

    return (
        <div className='landing-main'>  
                <svg className='landing-logo' width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_0_1)">
                    <path className='initial-M' d="M31.775 99C31.125 99 30.8 98.6 30.8 97.8C30.8 97.15 31.125 96.825 31.775 96.825C33.875 96.825 35.575 96.075 36.875 94.575C38.175 93.025 38.825 90.425 38.825 86.775V51.825C38.825 50.025 38.4 48.725 37.55 47.925C36.75 47.075 35.325 46.65 33.275 46.65C32.625 46.65 32.3 46.3 32.3 45.6C32.3 44.9 32.625 44.55 33.275 44.55C33.725 44.55 35.275 44.575 37.925 44.625C40.575 44.675 43.725 44.7 47.375 44.7C49.075 44.7 50.15 45.35 50.6 46.65C50.7 46.95 51.05 47.95 51.65 49.65C52.25 51.35 52.975 53.45 53.825 55.95C54.725 58.4 55.65 61 56.6 63.75C57.6 66.45 58.525 69.025 59.375 71.475C60.275 73.925 61.025 75.975 61.625 77.625C62.225 79.225 62.55 80.125 62.6 80.325C63.15 81.875 63.8 81.725 64.55 79.875C64.65 79.575 64.975 78.65 65.525 77.1C66.125 75.5 66.825 73.525 67.625 71.175C68.475 68.775 69.35 66.25 70.25 63.6C71.15 60.95 72 58.45 72.8 56.1C73.65 53.7 74.35 51.675 74.9 50.025C75.5 48.325 75.85 47.3 75.95 46.95C76.4 45.45 77.5 44.7 79.25 44.7C82.9 44.7 85.95 44.675 88.4 44.625C90.85 44.575 92.25 44.55 92.6 44.55C93.25 44.55 93.575 44.9 93.575 45.6C93.575 46.3 93.25 46.65 92.6 46.65C90.75 46.65 89.45 47.05 88.7 47.85C88 48.6 87.65 49.7 87.65 51.15V92.025C87.65 93.625 87.95 94.825 88.55 95.625C89.15 96.425 90.35 96.825 92.15 96.825C92.8 96.825 93.125 97.15 93.125 97.8C93.125 98.6 92.8 99 92.15 99C91.65 99 90.65 98.975 89.15 98.925C87.7 98.825 85.825 98.775 83.525 98.775C82.075 98.775 80.55 98.8 78.95 98.85C77.4 98.85 76.05 98.875 74.9 98.925C73.75 98.975 73 99 72.65 99C71.9 99 71.525 98.6 71.525 97.8C71.525 97.15 71.9 96.825 72.65 96.825C74.95 96.825 76.525 96.475 77.375 95.775C78.225 95.025 78.65 93.775 78.65 92.025V49.8C78.65 49.45 78.525 49.275 78.275 49.275C78.025 49.275 77.85 49.375 77.75 49.575C77.7 49.725 77.35 50.675 76.7 52.425C76.1 54.175 75.3 56.45 74.3 59.25C73.35 62.05 72.3 65.125 71.15 68.475C70 71.775 68.85 75.075 67.7 78.375C66.55 81.675 65.5 84.7 64.55 87.45C63.6 90.2 62.825 92.425 62.225 94.125C61.675 95.825 61.4 96.675 61.4 96.675C61.25 97.075 61.1 97.325 60.95 97.425C60.85 97.475 60.675 97.5 60.425 97.5C60.025 97.5 59.725 97.275 59.525 96.825C59.475 96.725 59.125 95.85 58.475 94.2C57.875 92.55 57.05 90.375 56 87.675C55 84.975 53.9 82.025 52.7 78.825C51.5 75.625 50.275 72.425 49.025 69.225C47.825 66.025 46.7 63.1 45.65 60.45C44.65 57.75 43.825 55.575 43.175 53.925C42.575 52.225 42.25 51.35 42.2 51.3C42.15 51.15 42.025 51.1 41.825 51.15C41.675 51.2 41.6 51.325 41.6 51.525V86.7C41.6 90.5 42.35 93.15 43.85 94.65C45.35 96.1 47.1 96.825 49.1 96.825C49.85 96.825 50.225 97.15 50.225 97.8C50.225 98.6 49.85 99 49.1 99C48.6 99 47.575 98.975 46.025 98.925C44.525 98.825 42.675 98.775 40.475 98.775C37.875 98.775 35.9 98.825 34.55 98.925C33.25 98.975 32.325 99 31.775 99Z" fill="#6C757D"/>
                    <path className='initial-T' d="M22.475 55C21.825 55 21.5 54.65 21.5 53.95C21.5 53.2 21.825 52.825 22.475 52.825C25.275 52.825 27.15 52.425 28.1 51.625C29.05 50.825 29.525 49.7 29.525 48.25V4.45C29.525 3.4 29 2.875 27.95 2.875H23.45C21.55 2.875 19.925 3.325 18.575 4.225C17.225 5.075 16.1 6.175 15.2 7.525C14.3 8.825 13.575 10.125 13.025 11.425C12.475 12.725 12.05 13.825 11.75 14.725C11.65 15.025 11.5 15.2 11.3 15.25C11.1 15.3 10.825 15.3 10.475 15.25C10.425 15.25 10.375 15.25 10.325 15.25C10.025 15.2 9.85 15.1 9.8 14.95C9.75 14.75 9.725 14.55 9.725 14.35C9.725 14.15 9.75 13.5 9.8 12.4C9.85 11.3 9.9 10.05 9.95 8.65C10.05 7.25 10.125 5.95 10.175 4.75C10.225 3.55 10.25 2.725 10.25 2.275C10.25 1.125 10.9 0.549999 12.2 0.549999C12.45 0.549999 13.525 0.574999 15.425 0.624998C17.325 0.674998 19.875 0.724997 23.075 0.774996C26.325 0.774996 30.05 0.774996 34.25 0.774996C38.45 0.774996 42.15 0.774996 45.35 0.774996C48.6 0.724997 51.2 0.674998 53.15 0.624998C55.1 0.574999 56.2 0.549999 56.45 0.549999C57.65 0.549999 58.275 1.15 58.325 2.35C58.325 2.7 58.35 3.475 58.4 4.675C58.5 5.825 58.575 7.125 58.625 8.575C58.675 9.975 58.725 11.25 58.775 12.4C58.825 13.5 58.85 14.15 58.85 14.35C58.85 14.65 58.825 14.875 58.775 15.025C58.725 15.125 58.5 15.2 58.1 15.25C58.05 15.25 57.975 15.275 57.875 15.325C57.675 15.325 57.5 15.325 57.35 15.325C57.2 15.275 57.025 15.05 56.825 14.65C56.425 13.8 55.925 12.725 55.325 11.425C54.775 10.125 54.05 8.825 53.15 7.525C52.3 6.225 51.225 5.125 49.925 4.225C48.625 3.325 47.025 2.875 45.125 2.875H40.175C39.725 2.875 39.325 2.975 38.975 3.175C38.675 3.325 38.525 3.75 38.525 4.45V48.25C38.525 49.1 38.65 49.875 38.9 50.575C39.2 51.275 39.825 51.825 40.775 52.225C41.775 52.625 43.3 52.825 45.35 52.825C46.1 52.825 46.475 53.2 46.475 53.95C46.475 54.65 46.1 55 45.35 55C44.85 55 43.6 54.975 41.6 54.925C39.65 54.825 37.125 54.775 34.025 54.775C30.925 54.775 28.35 54.825 26.3 54.925C24.3 54.975 23.025 55 22.475 55Z" fill="#6C757D"/>
                    <rect className='bg-letters' x="36" width="15" height="100" fill="white"/>
                    <rect className='bg-letters' x="29" y="84" width="18" height="15" fill="white"/>
                    <path className='logo-fullName' d="M43.236 0.54L47.58 0.54V11.1L43.236 11.1V9.156H46.02V6.54L39 6.54V4.62L46.02 4.62V2.484L43.236 2.484V0.54ZM39 10.5614L47.58 14.4254V17.3894L39 21.2534V19.1654L40.812 18.3494V13.4654L39 12.6494V10.5614ZM42.372 14.1614L42.372 17.6534L46.08 15.9854V15.8294L42.372 14.1614ZM39 22.215L47.58 22.215V24.135H44.064V30.183H47.58V32.103H39V30.183H42.504V24.135H39V22.215ZM39 33.7814H47.58V35.7014H39V33.7814ZM39 37.3791H47.58L47.58 44.5671C47.58 45.4551 47.356 46.1431 46.908 46.6311C46.46 47.1271 45.78 47.3751 44.868 47.3751C44.092 47.3751 43.484 47.1951 43.044 46.8351C42.604 46.4751 42.328 45.9631 42.216 45.2991L39 47.2791V45.0951L42.156 43.2591V39.2991H39V37.3791ZM46.02 44.3391V39.2991H43.728L43.716 44.3391C43.716 44.6911 43.804 44.9591 43.98 45.1431C44.156 45.3351 44.452 45.4311 44.868 45.4311C45.292 45.4311 45.588 45.3351 45.756 45.1431C45.932 44.9591 46.02 44.6911 46.02 44.3391ZM39 53.0119H47.58V54.6199L44.796 58.5919V58.6519L47.58 62.6239V64.2319H39V62.3119H45.18L43.356 59.5879H39V57.6679H43.356L45.18 54.9319H39V53.0119ZM38.94 69.3822C38.94 68.5102 39.052 67.8222 39.276 67.3182C39.508 66.8142 39.856 66.4542 40.32 66.2382C40.784 66.0222 41.368 65.9142 42.072 65.9142H47.58L47.58 67.8342H42.072C41.464 67.8342 41.048 67.9742 40.824 68.2542C40.608 68.5422 40.5 69.0262 40.5 69.7062L40.5 72.0222C40.5 72.7022 40.608 73.1822 40.824 73.4622C41.048 73.7502 41.464 73.8942 42.072 73.8942H47.58V75.8142H42.072C41.368 75.8142 40.784 75.7062 40.32 75.4902C39.856 75.2742 39.508 74.9142 39.276 74.4102C39.052 73.9062 38.94 73.2182 38.94 72.3462V69.3822ZM38.94 80.3603C38.94 79.1763 39.148 78.3043 39.564 77.7443C39.988 77.1923 40.636 76.9163 41.508 76.9163C41.716 76.9163 41.928 76.9403 42.144 76.9883V78.9083C42.04 78.8923 41.94 78.8803 41.844 78.8723C41.748 78.8643 41.668 78.8603 41.604 78.8603C41.164 78.8603 40.868 79.0243 40.716 79.3523C40.572 79.6803 40.5 80.1243 40.5 80.6843V81.4403C40.5 82.1203 40.608 82.6003 40.824 82.8803C41.048 83.1683 41.464 83.3123 42.072 83.3123H47.58V85.2323H42.072C41.368 85.2323 40.784 85.1243 40.32 84.9083C39.856 84.6923 39.508 84.3323 39.276 83.8283C39.052 83.3243 38.94 82.6363 38.94 81.7643V80.3603ZM39 86.9142H47.58V88.8342H39V86.9142ZM38.94 94.9279C38.94 93.3439 39.304 92.1319 40.032 91.2919C40.768 90.4519 41.856 90.0319 43.296 90.0319C44.728 90.0319 45.812 90.4519 46.548 91.2919C47.284 92.1319 47.648 93.3439 47.64 94.9279L47.616 99.2479H46.08V95.0599C46.08 94.0199 45.86 93.2479 45.42 92.7439C44.98 92.2399 44.272 91.9879 43.296 91.9879C42.32 91.9879 41.608 92.2399 41.16 92.7439C40.72 93.2479 40.5 94.0199 40.5 95.0599V99.3679H38.94V94.9279Z" fill="#6C757D"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_0_1">
                    <rect width="100" height="100" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
        </div>
    )
}