import { h } from "@stencil/core";

export const Logo = props => (
  <svg viewBox="0 0 78 25" fill="currentColor" {...props}>
    <title>Alita Docs</title>
    <text
      style={{ "white-space": "pre" }}
      font-size="20"
      font-weight="bold"
      letter-spacing="-0.02em"
    >
      <tspan x="5" y="19">
        A
      </tspan>
    </text>
    <path d="M19.8517 8.01728C21.2289 8.01728 22.3454 6.9008 22.3454 5.52354C22.3454 4.14628 21.2289 3.02979 19.8517 3.02979C18.4744 3.02979 17.3579 4.14628 17.3579 5.52354C17.3579 6.9008 18.4744 8.01728 19.8517 8.01728Z"/>
    <path d="M22.9219 8.02656L22.8187 7.79688L22.65 7.98438C22.2422 8.44844 21.7219 8.80469 21.1453 9.02031L20.9859 9.08125L21.0516 9.23594C21.5484 10.4312 21.8016 11.6969 21.8016 12.9953C21.8016 18.4 17.4047 22.8016 11.9953 22.8016C6.58594 22.8016 2.19375 18.4047 2.19375 13C2.19375 7.59531 6.59531 3.19375 12 3.19375C13.4672 3.19375 14.8828 3.5125 16.2 4.14062L16.3547 4.21562L16.4203 4.06094C16.6594 3.49844 17.0437 2.99687 17.5266 2.60781L17.7234 2.44844L17.4984 2.33125C15.7875 1.45 13.9359 1 12 1C5.38125 1 0 6.38125 0 13C0 19.6187 5.38125 25 12 25C18.6187 25 24 19.6187 24 13C24 11.2703 23.6391 9.59687 22.9219 8.02656Z" />
    <text
      style={{ "white-space": "pre" }}
      font-size="18"
      font-weight="bold"
      letter-spacing="-0.02em"
    >
      <tspan x="27.5" y="19.5">
        Docs
      </tspan>
    </text>
  </svg>
);

export const BackArrow = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
  </svg>
);

export const Book = props => (
  <svg viewBox="0 0 16 14" fill="none" {...props}>
    <path
      d="M0 0.21875C0 0.21875 1.5 -0.273438 4 0.21875C6.5 0.710938 8 2.1875 8 2.1875V14C8 14 6 13.0156 4 12.5234C2 12.0312 0 12.0312 0 12.0312V0.21875Z"
      fill="#73849A"
    />
    <path
      d="M16 0.21875C16 0.21875 14.5 -0.273438 12 0.21875C9.5 0.710938 8 2.1875 8 2.1875V14C8 14 10 13.0156 12 12.5234C14 12.0312 16 12.0312 16 12.0312V0.21875Z"
      fill="#B2BECD"
    />
  </svg>
);

export const Close = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" />
  </svg>
);

export const DownArrow = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
  </svg>
);

export const ForwardArrow = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
  </svg>
);

export const Outbound = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z" />
  </svg>
);

export const Search = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z" />
  </svg>
);

export const GitBranch = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z" />
  </svg>
);

export const Menu = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z" />
  </svg>
);

export const MoreDots = props => (
  <svg viewBox="0 0 4 16" {...props}>
    <path
      d="M4 2C4 0.8999 3.1001 0 2 0C0.8999 0 0 0.8999 0 2C0 3.1001 0.8999 4 2 4C3.1001 4 4 3.1001 4 2ZM4 14C4 12.8999 3.1001 12 2 12C0.8999 12 0 12.8999 0 14C0 15.1001 0.8999 16 2 16C3.1001 16 4 15.1001 4 14ZM4 8C4 6.8999 3.1001 6 2 6C0.8999 6 0 6.8999 0 8C0 9.1001 0.8999 10 2 10C3.1001 10 4 9.1001 4 8Z"
      fill="#5B708B"
    />
  </svg>
);

export const Checkmark = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z" />
  </svg>
);

export const Info = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm21 312h-42V235h42v125zm0-166h-42v-42h42v42z" />
  </svg>
);

export const Angular = props => (
  <svg viewBox="0 0 14 14" fill="none" {...props}>
    <path d="M5.674 7h2.651L7 4.208 5.674 7z" fill="#E13535" />
    <path
      d="M7 0L0 2.5 1.441 11 7 14l5.555-3L14 2.5 7 0zm2.75 10l-.83-1.75H5.08L4.25 10H3l4-8.75L11 10H9.75z"
      fill="#E13535"
    />
  </svg>
);

export const JavaScript = props => (
  <svg viewBox="0 0 13 13" fill="none" {...props}>
    <path fill="#FFD12F" d="M0 0h13v13H0z" />
    <path
      d="M7.357 6.114H6.286v3.018c0 .747-.242.956-.662.956-.197 0-.374-.036-.512-.087L5 10.885c.197.072.499.115.735.115.965 0 1.622-.481 1.622-1.86V6.113zM9.694 6C8.657 6 8 6.625 8 7.451c0 .711.506 1.157 1.24 1.444.532.201.743.381.743.675 0 .324-.243.532-.703.532-.427 0-.814-.151-1.077-.302L8 10.698c.25.15.716.302 1.221.302C10.435 11 11 10.31 11 9.498c0-.69-.361-1.135-1.142-1.45-.578-.245-.82-.381-.82-.69 0-.245.21-.467.643-.467.426 0 .72.152.89.245l.257-.909C10.56 6.103 10.198 6 9.694 6z"
      fill="#0E151F"
    />
  </svg>
);

export const React = props => (
  <svg viewBox="0 0 14 14" fill="none" {...props}>
    <circle cx="7" cy="7" r="7" fill="#1A232F" />
    <path
      d="M7.891 7c0 .497-.399.9-.89.9a.895.895 0 0 1-.892-.9c0-.497.399-.9.891-.9s.891.403.891.9z"
      fill="#5ADBFF"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6.564 3.223c.144.118.29.25.436.393a6.61 6.61 0 0 1 .436-.393c.371-.305.74-.529 1.085-.641.345-.113.689-.12.979.049.29.169.456.473.531.83.076.358.069.793-.007 1.27-.03.185-.07.377-.12.577.197.056.382.117.555.184.448.172.825.383 1.093.628.27.245.448.542.448.88 0 .338-.179.635-.448.88-.268.245-.645.456-1.093.628a6.559 6.559 0 0 1-.554.184c.05.2.09.392.119.577.076.477.083.912.008 1.27-.076.357-.242.661-.532.83-.29.17-.634.162-.98.05-.344-.113-.713-.337-1.084-.642A6.635 6.635 0 0 1 7 10.384a6.635 6.635 0 0 1-.436.393c-.371.305-.74.529-1.085.641-.345.113-.689.12-.979-.049-.29-.169-.456-.473-.532-.83-.075-.358-.068-.793.008-1.27.03-.185.07-.377.12-.577a6.55 6.55 0 0 1-.555-.184c-.448-.172-.825-.383-1.093-.628C2.178 7.635 2 7.338 2 7c0-.338.179-.635.448-.88.268-.245.645-.456 1.093-.628a6.55 6.55 0 0 1 .554-.184c-.05-.2-.09-.392-.119-.577-.076-.477-.083-.912-.008-1.27.076-.357.242-.661.532-.83.29-.17.634-.162.98-.05.344.113.713.337 1.084.642zm3.042.33c-.06-.285-.177-.457-.323-.542-.147-.086-.353-.102-.628-.012-.276.09-.598.28-.945.564-.134.11-.27.232-.407.367.287.312.572.669.847 1.06.474.045.922.116 1.333.21a6.26 6.26 0 0 0 .111-.539c.071-.446.073-.822.012-1.107zm-3.316.01c.134.11.27.232.407.367a10.49 10.49 0 0 0-.847 1.06c-.474.045-.922.116-1.333.21a6.26 6.26 0 0 1-.112-.539c-.07-.446-.072-.822-.011-1.107.06-.286.177-.458.323-.543.147-.086.353-.102.628-.012.276.09.598.28.945.564zm2.177 1.904c.316.04.617.092.897.156a9.763 9.763 0 0 1-.315.862 12.941 12.941 0 0 0-.582-1.018zm1.32.263c-.125.406-.289.834-.488 1.27.2.436.363.864.488 1.27.184-.053.357-.11.517-.172.418-.161.742-.348.957-.544.215-.196.304-.383.304-.554 0-.17-.089-.358-.304-.554-.215-.196-.538-.383-.957-.544a6.117 6.117 0 0 0-.517-.172zm-1.394.458c.156.273.298.544.426.812a12.345 12.345 0 0 1-.91 1.59 12.086 12.086 0 0 1-1.818 0A12.323 12.323 0 0 1 5.18 7a12.345 12.345 0 0 1 .91-1.59 12.086 12.086 0 0 1 1.818 0c.166.246.328.506.484.778zm.377 1.843c-.099.172-.2.34-.303.502.316-.04.617-.092.897-.156a9.763 9.763 0 0 0-.315-.862c-.088.172-.18.344-.28.516zM7 9.062c.197 0 .391-.005.582-.013A9.686 9.686 0 0 1 7 9.755a9.688 9.688 0 0 1-.582-.706c.19.008.385.013.582.013zm1.15-.053c-.275.392-.56.749-.847 1.061.137.135.273.257.407.367.347.284.669.474.945.564.275.09.481.074.628-.012.146-.085.263-.257.323-.543.061-.285.06-.661-.011-1.107a6.26 6.26 0 0 0-.112-.539c-.411.094-.86.165-1.333.21zm-2.3 0c.275.392.56.749.847 1.061a6.17 6.17 0 0 1-.407.367c-.347.284-.669.474-.945.564-.275.09-.481.074-.628-.012-.146-.085-.263-.257-.323-.543-.061-.285-.06-.661.011-1.107a6.26 6.26 0 0 1 .112-.539c.411.094.86.165 1.333.21zm-.317-.476a9.539 9.539 0 0 1-.897-.156c.086-.277.19-.565.315-.862a12.941 12.941 0 0 0 .582 1.018zM5.23 5.97c-.098.172-.191.344-.28.516a9.763 9.763 0 0 1-.314-.862c.28-.064.58-.116.897-.156-.103.162-.204.33-.303.502zM4.213 8.27c.125-.406.289-.834.488-1.27a10.567 10.567 0 0 1-.488-1.27c-.184.053-.357.11-.517.172-.419.161-.742.348-.957.544-.215.196-.304.383-.304.554 0 .17.089.358.304.554.215.196.538.383.957.544.16.062.333.12.517.172zM7 4.938a12.7 12.7 0 0 0-.582.013c.192-.256.387-.492.582-.706.195.214.39.45.582.706A12.698 12.698 0 0 0 7 4.938z"
      fill="#5ADBFF"
    />
  </svg>
);

export const Translation = props => (
  <svg viewBox="0 0 22 14" fill="none" {...props}>
    <path
      d="M19.3213 13.9999H22.0001L17.039 1.21558H14.2346L9.2832 13.9999H11.8072L13.0064 10.7307H18.1415L19.3213 13.9999ZM15.5014 3.65195H15.6658L17.5613 8.92339H13.5866L15.5014 3.65195Z"
      fill="#B2BECD"
    />
    <path d="M0 1.10938H12.4318L11.5697 3.32812H0V1.10938Z" fill="#B2BECD" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.75268 1.11609C8.75268 1.11609 8.75268 1.11712 9.89332 1.11712C11.034 1.11712 11.034 1.11822 11.034 1.11822L11.034 1.11939L11.034 1.12198L11.0339 1.12805L11.0337 1.14382C11.0335 1.15593 11.0332 1.17122 11.0325 1.1896C11.0313 1.22637 11.029 1.27554 11.0248 1.33642C11.0164 1.45817 11.0003 1.62689 10.9695 1.83709C10.9081 2.25748 10.7879 2.84428 10.5533 3.55314C10.083 4.97375 9.15623 6.87412 7.33744 8.89844L7.30893 8.93017L2.7154 13.3124L1.24023 11.7004L5.63338 7.45082C7.21765 5.67868 7.9949 4.05478 8.37789 2.89777C8.57098 2.31443 8.66471 1.84706 8.71016 1.53633C8.73288 1.38097 8.74352 1.2649 8.74847 1.19324C8.75095 1.15741 8.752 1.13272 8.75243 1.11981L8.75272 1.10938L8.7527 1.11094L8.75269 1.11345L8.75268 1.11609Z"
      fill="#B2BECD"
    />
    <rect x="5.5166" width="2.20704" height="1.10937" fill="#B2BECD" />
    <path
      d="M4.17075 7.9686C3.09555 6.69872 2.39593 5.48407 1.94141 4.4375H4.40026C4.76103 5.09472 5.24197 5.81584 5.88345 6.5682L5.93101 6.62398L5.96524 6.67692C5.96787 6.68067 5.97319 6.68816 5.98137 6.69921C6.0017 6.72667 6.03969 6.77615 6.09781 6.8448C6.21395 6.98199 6.41098 7.19635 6.70864 7.46479C7.19301 7.9016 8.18265 8.61127 9.29424 9.23901L8.50109 11.2671C6.94927 10.5044 5.9002 9.71638 5.23489 9.11639C4.86256 8.78062 4.5965 8.49477 4.41706 8.28281C4.32738 8.17688 4.25946 8.08955 4.21081 8.02383C4.19559 8.00327 4.18226 7.98483 4.17075 7.9686Z"
      fill="#B2BECD"
    />
  </svg>
);

export const Vue = props => (
  <svg viewBox="0 0 14 13" fill="none" {...props}>
    <path d="M8.618 0L7 3.005 5.382 0H0l7 13 7-13H8.618z" fill="#4DB684" />
    <path
      d="M8.618 0L7 3.005 5.382 0h-2.58L7 7.8 11.198 0h-2.58z"
      fill="#36495D"
    />
  </svg>
);
