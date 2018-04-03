import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from './shared/styles'

const Svg = styled.svg`
  display: inline-block;
  vertical-align: middle;

  .learnstorybook-text {
    fill: ${props => (props.inverse ? color.lightest : color.darker)};
  }

  .learnstorybook-logo {
    fill: ${props => (props.inverse ? color.lightest : color.primary)};
  }
`

function Logo({ inverse, ...props }) {
  return (
    <Svg
      width="231px"
      height="25px"
      viewBox="0 0 231 25"
      inverse={inverse}
      {...props}
    >
      <g
        id="learnstorybook-cover"
        transform="translate(-137.000000, -39.000000)"
        fill="#FFFFFF"
      >
        <path
          d="M180.68,59 L180.68,42.08 L184.424,42.08 L184.424,55.952 L191.984,55.952 L191.984,59 L180.68,59 Z M204.392,53.792 L196.712,53.792 C196.824001,54.7360047 197.131997,55.4199979 197.636,55.844 C198.140003,56.2680021 198.855995,56.48 199.784,56.48 C200.392003,56.48 200.995997,56.380001 201.596,56.18 C202.196003,55.979999 202.743998,55.6960018 203.24,55.328 L204.2,57.752 C203.623997,58.2000022 202.924004,58.5519987 202.1,58.808 C201.275996,59.0640013 200.448004,59.192 199.616,59.192 C197.63199,59.192 196.068006,58.6440055 194.924,57.548 C193.779994,56.4519945 193.208,54.9600094 193.208,53.072 C193.208,51.871994 193.455998,50.8080046 193.952,49.88 C194.448002,48.9519954 195.135996,48.2280026 196.016,47.708 C196.896004,47.1879974 197.895994,46.928 199.016,46.928 C200.664008,46.928 201.971995,47.4639946 202.94,48.536 C203.908005,49.6080054 204.392,51.0639908 204.392,52.904 L204.392,53.792 Z M199.112,49.424 C198.423997,49.424 197.876002,49.6439978 197.468,50.084 C197.059998,50.5240022 196.808,51.1599958 196.712,51.992 L201.344,51.992 C201.296,51.1439958 201.084002,50.5040022 200.708,50.072 C200.331998,49.6399978 199.800003,49.424 199.112,49.424 Z M211.808,46.928 C213.568009,46.928 214.867996,47.3439958 215.708,48.176 C216.548004,49.0080042 216.968,50.2959913 216.968,52.04 L216.968,59 L213.536,59 L213.536,57.248 C213.295999,57.856003 212.896003,58.3319983 212.336,58.676 C211.775997,59.0200017 211.120004,59.192 210.368,59.192 C209.567996,59.192 208.844003,59.0320016 208.196,58.712 C207.547997,58.3919984 207.036002,57.9440029 206.66,57.368 C206.283998,56.7919971 206.096,56.1520035 206.096,55.448 C206.096,54.5839957 206.315998,53.9040025 206.756,53.408 C207.196002,52.9119975 207.903995,52.5520011 208.88,52.328 C209.856005,52.1039989 211.191992,51.992 212.888,51.992 L213.512,51.992 L213.512,51.56 C213.512,50.8559965 213.360002,50.3600014 213.056,50.072 C212.751998,49.7839986 212.224004,49.64 211.472,49.64 C210.895997,49.64 210.256004,49.743999 209.552,49.952 C208.847996,50.160001 208.176003,50.4479982 207.536,50.816 L206.576,48.392 C207.248003,47.9759979 208.075995,47.6280014 209.06,47.348 C210.044005,47.0679986 210.959996,46.928 211.808,46.928 Z M211.16,56.696 C211.864004,56.696 212.431998,56.4600024 212.864,55.988 C213.296002,55.5159976 213.512,54.9040038 213.512,54.152 L213.512,53.744 L213.104,53.744 C211.807994,53.744 210.900003,53.847999 210.38,54.056 C209.859997,54.264001 209.6,54.6399973 209.6,55.184 C209.6,55.6160022 209.747999,55.9759986 210.044,56.264 C210.340001,56.5520014 210.711998,56.696 211.16,56.696 Z M228.104,49.904 L226.064,50.12 C225.055995,50.2160005 224.344002,50.4999976 223.928,50.972 C223.511998,51.4440024 223.304,52.0719961 223.304,52.856 L223.304,59 L219.68,59 L219.68,47.216 L223.16,47.216 L223.16,49.208 C223.752003,47.8479932 224.975991,47.1040006 226.832,46.976 L227.888,46.904 L228.104,49.904 Z M236.696,46.928 C238.104007,46.928 239.151997,47.3399959 239.84,48.164 C240.528003,48.9880041 240.872,50.2319917 240.872,51.896 L240.872,59 L237.248,59 L237.248,52.064 C237.248,51.263996 237.100001,50.6800018 236.804,50.312 C236.507999,49.9439982 236.048003,49.76 235.424,49.76 C234.671996,49.76 234.068002,49.9999976 233.612,50.48 C233.155998,50.9600024 232.928,51.599996 232.928,52.4 L232.928,59 L229.304,59 L229.304,47.216 L232.832,47.216 L232.832,48.896 C233.248002,48.2559968 233.787997,47.7680017 234.452,47.432 C235.116003,47.0959983 235.863996,46.928 236.696,46.928 Z M256.496,59.216 C255.215994,59.216 253.984006,59.0440017 252.8,58.7 C251.615994,58.3559983 250.632004,57.880003 249.848,57.272 L251.048,54.608 C252.680008,55.7440057 254.51199,56.312 256.544,56.312 C257.600005,56.312 258.411997,56.1400017 258.98,55.796 C259.548003,55.4519983 259.832,54.976003 259.832,54.368 C259.832,53.8239973 259.572003,53.4000015 259.052,53.096 C258.531997,52.7919985 257.608007,52.4960014 256.28,52.208 C254.791993,51.9039985 253.604004,51.5360022 252.716,51.104 C251.827996,50.6719978 251.180002,50.1400032 250.772,49.508 C250.363998,48.8759968 250.16,48.0960046 250.16,47.168 C250.16,46.1439949 250.443997,45.232004 251.012,44.432 C251.580003,43.631996 252.375995,43.0040023 253.4,42.548 C254.424005,42.0919977 255.607993,41.864 256.952,41.864 C258.152006,41.864 259.307994,42.0399982 260.42,42.392 C261.532006,42.7440018 262.415997,43.215997 263.072,43.808 L261.872,46.472 C260.319992,45.3359943 258.688009,44.768 256.976,44.768 C255.999995,44.768 255.232003,44.9559981 254.672,45.332 C254.111997,45.7080019 253.832,46.2239967 253.832,46.88 C253.832,47.2640019 253.939999,47.5799988 254.156,47.828 C254.372001,48.0760012 254.731997,48.295999 255.236,48.488 C255.740003,48.680001 256.455995,48.879999 257.384,49.088 C259.560011,49.5680024 261.123995,50.1839962 262.076,50.936 C263.028005,51.6880038 263.504,52.7279934 263.504,54.056 C263.504,55.656008 262.888006,56.9159954 261.656,57.836 C260.423994,58.7560046 258.704011,59.216 256.496,59.216 Z M272.192,56.528 C272.560002,56.528 272.943998,56.5040002 273.344,56.456 L273.152,59.096 C272.687998,59.1600003 272.224002,59.192 271.76,59.192 C269.967991,59.192 268.660004,58.8000039 267.836,58.016 C267.011996,57.2319961 266.6,56.040008 266.6,54.44 L266.6,49.928 L264.368,49.928 L264.368,47.216 L266.6,47.216 L266.6,43.76 L270.224,43.76 L270.224,47.216 L273.176,47.216 L273.176,49.928 L270.224,49.928 L270.224,54.416 C270.224,55.824007 270.879993,56.528 272.192,56.528 Z M280.616,59.192 C279.367994,59.192 278.272005,58.9400025 277.328,58.436 C276.383995,57.9319975 275.656003,57.2200046 275.144,56.3 C274.631997,55.3799954 274.376,54.2960062 274.376,53.048 C274.376,51.7999938 274.631997,50.7160046 275.144,49.796 C275.656003,48.8759954 276.383995,48.1680025 277.328,47.672 C278.272005,47.1759975 279.367994,46.928 280.616,46.928 C281.864006,46.928 282.959995,47.1759975 283.904,47.672 C284.848005,48.1680025 285.575997,48.8759954 286.088,49.796 C286.600003,50.7160046 286.856,51.7999938 286.856,53.048 C286.856,54.2960062 286.600003,55.3799954 286.088,56.3 C285.575997,57.2200046 284.848005,57.9319975 283.904,58.436 C282.959995,58.9400025 281.864006,59.192 280.616,59.192 Z M280.616,56.432 C282.376009,56.432 283.256,55.3040113 283.256,53.048 C283.256,51.9119943 283.028002,51.0640028 282.572,50.504 C282.115998,49.9439972 281.464004,49.664 280.616,49.664 C278.855991,49.664 277.976,50.7919887 277.976,53.048 C277.976,55.3040113 278.855991,56.432 280.616,56.432 Z M297.488,49.904 L295.448,50.12 C294.439995,50.2160005 293.728002,50.4999976 293.312,50.972 C292.895998,51.4440024 292.688,52.0719961 292.688,52.856 L292.688,59 L289.064,59 L289.064,47.216 L292.544,47.216 L292.544,49.208 C293.136003,47.8479932 294.359991,47.1040006 296.216,46.976 L297.272,46.904 L297.488,49.904 Z M307.568,47.24 L311.12,47.24 L304.016,63.32 L300.344,63.32 L302.6,58.352 L297.752,47.24 L301.52,47.24 L304.496,54.728 L307.568,47.24 Z M319.52,46.928 C320.544005,46.928 321.447996,47.1759975 322.232,47.672 C323.016004,48.1680025 323.627998,48.8759954 324.068,49.796 C324.508002,50.7160046 324.728,51.7839939 324.728,53 C324.728,54.2160061 324.508002,55.2919953 324.068,56.228 C323.627998,57.1640047 323.012004,57.8919974 322.22,58.412 C321.427996,58.9320026 320.528005,59.192 319.52,59.192 C318.703996,59.192 317.968003,59.0200017 317.312,58.676 C316.655997,58.3319983 316.152002,57.856003 315.8,57.248 L315.8,59 L312.224,59 L312.224,42.08 L315.848,42.08 L315.848,48.8 C316.200002,48.207997 316.699997,47.7480016 317.348,47.42 C317.996003,47.0919984 318.719996,46.928 319.52,46.928 Z M318.464,56.432 C319.312004,56.432 319.967998,56.132003 320.432,55.532 C320.896002,54.931997 321.128,54.0880054 321.128,53 C321.128,51.9279946 320.896002,51.1080028 320.432,50.54 C319.967998,49.9719972 319.312004,49.688 318.464,49.688 C317.615996,49.688 316.960002,49.9799971 316.496,50.564 C316.031998,51.1480029 315.8,51.9759946 315.8,53.048 C315.8,54.1360054 316.031998,54.9719971 316.496,55.556 C316.960002,56.1400029 317.615996,56.432 318.464,56.432 Z M332.6,59.192 C331.351994,59.192 330.256005,58.9400025 329.312,58.436 C328.367995,57.9319975 327.640003,57.2200046 327.128,56.3 C326.615997,55.3799954 326.36,54.2960062 326.36,53.048 C326.36,51.7999938 326.615997,50.7160046 327.128,49.796 C327.640003,48.8759954 328.367995,48.1680025 329.312,47.672 C330.256005,47.1759975 331.351994,46.928 332.6,46.928 C333.848006,46.928 334.943995,47.1759975 335.888,47.672 C336.832005,48.1680025 337.559997,48.8759954 338.072,49.796 C338.584003,50.7160046 338.84,51.7999938 338.84,53.048 C338.84,54.2960062 338.584003,55.3799954 338.072,56.3 C337.559997,57.2200046 336.832005,57.9319975 335.888,58.436 C334.943995,58.9400025 333.848006,59.192 332.6,59.192 Z M332.6,56.432 C334.360009,56.432 335.24,55.3040113 335.24,53.048 C335.24,51.9119943 335.012002,51.0640028 334.556,50.504 C334.099998,49.9439972 333.448004,49.664 332.6,49.664 C330.839991,49.664 329.96,50.7919887 329.96,53.048 C329.96,55.3040113 330.839991,56.432 332.6,56.432 Z M346.712,59.192 C345.463994,59.192 344.368005,58.9400025 343.424,58.436 C342.479995,57.9319975 341.752003,57.2200046 341.24,56.3 C340.727997,55.3799954 340.472,54.2960062 340.472,53.048 C340.472,51.7999938 340.727997,50.7160046 341.24,49.796 C341.752003,48.8759954 342.479995,48.1680025 343.424,47.672 C344.368005,47.1759975 345.463994,46.928 346.712,46.928 C347.960006,46.928 349.055995,47.1759975 350,47.672 C350.944005,48.1680025 351.671997,48.8759954 352.184,49.796 C352.696003,50.7160046 352.952,51.7999938 352.952,53.048 C352.952,54.2960062 352.696003,55.3799954 352.184,56.3 C351.671997,57.2200046 350.944005,57.9319975 350,58.436 C349.055995,58.9400025 347.960006,59.192 346.712,59.192 Z M346.712,56.432 C348.472009,56.432 349.352,55.3040113 349.352,53.048 C349.352,51.9119943 349.124002,51.0640028 348.668,50.504 C348.211998,49.9439972 347.560004,49.664 346.712,49.664 C344.951991,49.664 344.072,50.7919887 344.072,53.048 C344.072,55.3040113 344.951991,56.432 346.712,56.432 Z M367.736,59 L363.296,59 L358.784,53.744 L358.784,59 L355.16,59 L355.16,42.08 L358.784,42.08 L358.784,52.256 L363.128,47.24 L367.448,47.24 L362.504,52.856 L367.736,59 Z"
          className="learnstorybook-text"
        />
        <path
          d="M162.4375,40.0732779 L162.4375,54.96875 L164.125,52 L166,54 L166,39.3607779 L167.607768,39.0392243 C168.690887,38.8226004 169.744537,39.5250339 169.961161,40.6081534 C169.986991,40.7372998 170,40.8686817 170,41.0003857 L170,57.9211701 C170,58.8745321 169.327081,59.6953617 168.392232,59.8823314 L157.392232,62.0823314 C156.309113,62.2989553 155.255463,61.5965218 155.038839,60.5134023 C155.013009,60.384256 155,60.252874 155,60.1211701 L155,43.2003857 C155,42.2470236 155.672919,41.426194 156.607768,41.2392243 L162.4375,40.0732779 Z M139.392232,39.0392243 L150.392232,41.2392243 C151.327081,41.426194 152,42.2470236 152,43.2003857 L152,60.1211701 C152,61.2257396 151.104569,62.1211701 150,62.1211701 C149.868296,62.1211701 149.736914,62.1081607 149.607768,62.0823314 L138.607768,59.8823314 C137.672919,59.6953617 137,58.8745321 137,57.9211701 L137,41.0003857 C137,39.8958162 137.895431,39.0003857 139,39.0003857 C139.131704,39.0003857 139.263086,39.0133951 139.392232,39.0392243 Z"
          className="learnstorybook-logo"
        />
      </g>
    </Svg>
  )
}

Logo.propTypes = {
  inverse: PropTypes.bool.isRequired,
}

Logo.defaultProps = {
  inverse: false,
}

export default Logo
