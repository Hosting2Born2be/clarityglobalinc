'use client';

export function OrangeTelegram({ flat = false }: { flat?: boolean }) {
  return flat ? (
    <div
      style={{
        width: '38px',
        height: '38px',
        backgroundColor: '#f85c3a',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <svg
        width="20"
        height="17"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.83537 11.2191L7.52245 15.9702C7.98224 15.9702 8.1854 15.7571 8.44204 15.5043L10.6511 13.3274L15.247 16.7684C16.0928 17.2414 16.7032 16.9965 16.9139 15.9726L19.931 1.56445C20.2398 0.30941 19.4589 -0.259816 18.6497 0.112461L0.93382 7.03535C-0.275458 7.5269 -0.268408 8.21061 0.713394 8.51526L5.2597 9.95328L15.7849 3.22393C16.2818 2.91858 16.7378 3.08274 16.3635 3.41939L7.83511 11.2189L7.83537 11.2191Z"
          fill="white"
        ></path>
      </svg>
    </div>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
        fill="#F85C3A"
      ></path>
      <path
        d="M16.3337 29.1667C15.6857 29.1667 15.7958 28.922 15.5724 28.3051L13.667 22.0343L28.3337 13.3333"
        fill="#EAC8C8"
      ></path>
      <path
        d="M16.334 29.1666C16.834 29.1666 17.0549 28.938 17.334 28.6666L20.0007 26.0736L16.6743 24.0678"
        fill="#DDA9A9"
      ></path>
      <path
        d="M16.6735 24.0683L24.7335 30.0232C25.6533 30.5306 26.3171 30.2679 26.5462 29.1692L29.827 13.7087C30.1629 12.362 29.3137 11.7512 28.4338 12.1507L9.16879 19.5792C7.85378 20.1067 7.86144 20.8403 8.92909 21.1672L13.8729 22.7103L25.3184 15.4894C25.8587 15.1618 26.3546 15.3379 25.9476 15.6992"
        fill="url(#paint0_linear_1513_1208)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_1513_1208"
          x1="17.4965"
          y1="21.2285"
          x2="19.6335"
          y2="28.141"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFF7FC"></stop>
          <stop offset="1" stopColor="white"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
