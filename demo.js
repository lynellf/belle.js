import React from 'react'
import ReactDOM from 'react-dom'
import Belle from './lib/es6_global/src/Belle.bs.js'

function App() {
  const data = [
    {
      x: 1.42,
      y: 0.0778038405265464
    },
    {
      x: 1.81,
      y: 0.035147893584039
    },
    {
      x: -0.18,
      y: 0.428576284099099
    },
    {
      x: 0.78,
      y: 0.217695437585733
    },
    {
      x: 0.44,
      y: 0.329968553660594
    },
    {
      x: 1.78,
      y: 0.0375379803485167
    },
    {
      x: -0.65,
      y: 0.257846110805865
    },
    {
      x: 0.1,
      y: 0.460172162722971
    },
    {
      x: 0.0499999999999998,
      y: 0.480061194161628
    },
    {
      x: -0.97,
      y: 0.16602324606353
    },
    {
      x: -0.17,
      y: 0.432505068324962
    },
    {
      x: -0.66,
      y: 0.254626914671336
    },
    {
      x: 0.0699999999999998,
      y: 0.472096829819479
    },
    {
      x: -0.42,
      y: 0.337242726848249
    },
    {
      x: -0.86,
      y: 0.194894521251808
    },
    {
      x: 0.0800000000000001,
      y: 0.468118627986013
    },
    {
      x: -0.68,
      y: 0.24825223045357
    },
    {
      x: -0.27,
      y: 0.393580126801961
    },
    {
      x: -1.89,
      y: 0.0293789800404094
    },
    {
      x: 0.16,
      y: 0.436440537108567
    },
    {
      x: 0.24,
      y: 0.405165128302204
    },
    {
      x: -0.77,
      y: 0.22064994634265
    },
    {
      x: -0.04,
      y: 0.484046563147169
    },
    {
      x: -0.79,
      y: 0.214763884163637
    },
    {
      x: -1.48,
      y: 0.0694366233333317
    },
    {
      x: -0.13,
      y: 0.448283213345439
    },
    {
      x: 0.17,
      y: 0.432505068324962
    },
    {
      x: 1.62,
      y: 0.0526161384542521
    },
    {
      x: -0.0800000000000001,
      y: 0.468118627986013
    },
    {
      x: 2.4,
      y: 0.00819753592459627
    },
    {
      x: -0.29,
      y: 0.385908118801123
    },
    {
      x: -0.27,
      y: 0.393580126801961
    },
    {
      x: -0.72,
      y: 0.235762497779251
    },
    {
      x: -1.5,
      y: 0.0668072012688579
    },
    {
      x: -0.54,
      y: 0.294598516215698
    },
    {
      x: 0.67,
      y: 0.25142889509531
    },
    {
      x: 1.31,
      y: 0.0950979177952391
    },
    {
      x: 0.4,
      y: 0.344578258389676
    },
    {
      x: 0.16,
      y: 0.436440537108567
    },
    {
      x: -0.66,
      y: 0.254626914671336
    },
    {
      x: -1.25,
      y: 0.105649773666855
    },
    {
      x: -0.84,
      y: 0.20045419326045
    },
    {
      x: -0.59,
      y: 0.277595324753465
    },
    {
      x: 2.85,
      y: 0.00218596145491334
    },
    {
      x: -1.16,
      y: 0.123024403051343
    },
    {
      x: 2.38,
      y: 0.00865631902551689
    },
    {
      x: 0.12,
      y: 0.452241573979416
    },
    {
      x: 1.12,
      y: 0.131356881042731
    },
    {
      x: 0.19,
      y: 0.424654565265205
    },
    {
      x: -0.02,
      y: 0.492021686283098
    },
    {
      x: 1.46,
      y: 0.0721450369658938
    },
    {
      x: -1.43,
      y: 0.0763585095367392
    },
    {
      x: 1.92,
      y: 0.0274289497038368
    },
    {
      x: -0.04,
      y: 0.484046563147169
    },
    {
      x: 0.85,
      y: 0.197662543122693
    },
    {
      x: -0.27,
      y: 0.393580126801961
    },
    {
      x: 0.33,
      y: 0.370699981059347
    },
    {
      x: 1.28,
      y: 0.100272567954442
    },
    {
      x: -0.77,
      y: 0.22064994634265
    },
    {
      x: -0.72,
      y: 0.235762497779251
    },
    {
      x: -0.36,
      y: 0.359423566782009
    },
    {
      x: -2.16,
      y: 0.0153863347839254
    },
    {
      x: -0.49,
      y: 0.312066949417391
    },
    {
      x: 0.92,
      y: 0.178786379614372
    },
    {
      x: 0.71,
      y: 0.238852068089987
    },
    {
      x: 0.33,
      y: 0.370699981059347
    },
    {
      x: 1.9,
      y: 0.028716559816002
    },
    {
      x: -0.63,
      y: 0.264347292115678
    },
    {
      x: -0.04,
      y: 0.484046563147169
    },
    {
      x: 0.1,
      y: 0.460172162722971
    },
    {
      x: 0.87,
      y: 0.192150202103696
    },
    {
      x: -0.24,
      y: 0.405165128302204
    },
    {
      x: -0.52,
      y: 0.301531787546966
    },
    {
      x: 0.35,
      y: 0.363169348824381
    },
    {
      x: -0.5,
      y: 0.308537538725987
    },
    {
      x: -0.0800000000000001,
      y: 0.468118627986013
    },
    {
      x: 0.23,
      y: 0.409045884857994
    },
    {
      x: -0.72,
      y: 0.235762497779251
    },
    {
      x: 3.24,
      y: 0.000597648497934533
    },
    {
      x: 0.12,
      y: 0.452241573979416
    },
    {
      x: -0.18,
      y: 0.428576284099099
    },
    {
      x: 0.23,
      y: 0.409045884857994
    },
    {
      x: 0.32,
      y: 0.37448416527668
    },
    {
      x: 0.23,
      y: 0.409045884857994
    },
    {
      x: -0.75,
      y: 0.226627352376868
    },
    {
      x: -0.72,
      y: 0.235762497779251
    },
    {
      x: -0.4,
      y: 0.344578258389676
    },
    {
      x: 0.16,
      y: 0.436440537108567
    },
    {
      x: -1.27,
      y: 0.102042315074819
    },
    {
      x: -0.0800000000000001,
      y: 0.468118627986013
    },
    {
      x: -0.47,
      y: 0.319177508782556
    },
    {
      x: 1.03,
      y: 0.151505002788344
    },
    {
      x: 0.44,
      y: 0.329968553660594
    },
    {
      x: 0.17,
      y: 0.432505068324962
    },
    {
      x: -0.24,
      y: 0.405165128302204
    },
    {
      x: 0.0800000000000001,
      y: 0.468118627986013
    },
    {
      x: 0.6,
      y: 0.274253117750074
    },
    {
      x: -0.7,
      y: 0.241963652223073
    },
    {
      x: 2.04,
      y: 0.0206751628660702
    },
    {
      x: -1.27,
      y: 0.102042315074819
    },
    {
      x: -2.23,
      y: 0.012873721438602
    },
    {
      x: -1.36,
      y: 0.0869149619470848
    },
    {
      x: 2.03,
      y: 0.0211782696426722
    },
    {
      x: 0.26,
      y: 0.39743188679824
    },
    {
      x: -1.09,
      y: 0.137856572032036
    },
    {
      x: -0.18,
      y: 0.428576284099099
    },
    {
      x: 1.85,
      y: 0.0321567747956137
    },
    {
      x: 1.4,
      y: 0.0807566592337712
    },
    {
      x: -0.7,
      y: 0.241963652223073
    },
    {
      x: -0.24,
      y: 0.405165128302204
    },
    {
      x: 1.62,
      y: 0.0526161384542521
    },
    {
      x: -0.42,
      y: 0.337242726848249
    },
    {
      x: -0.0600000000000001,
      y: 0.476077817345893
    },
    {
      x: -0.54,
      y: 0.294598516215698
    },
    {
      x: 0.23,
      y: 0.409045884857994
    },
    {
      x: -0.45,
      y: 0.32635522028792
    },
    {
      x: -0.86,
      y: 0.194894521251808
    },
    {
      x: 2.13,
      y: 0.0165858066836051
    },
    {
      x: -0.04,
      y: 0.484046563147169
    },
    {
      x: -0.93,
      y: 0.176185542245258
    },
    {
      x: 1.38,
      y: 0.0837933224150143
    },
    {
      x: 1.54,
      y: 0.0617801767118119
    },
    {
      x: -0.5,
      y: 0.308537538725987
    },
    {
      x: -1.23,
      y: 0.109348552425692
    },
    {
      x: -0.86,
      y: 0.194894521251808
    },
    {
      x: -0.38,
      y: 0.351972707575837
    },
    {
      x: 0.005,
      y: 0.498005296909259
    },
    {
      x: 0.005,
      y: 0.498005296909259
    },
    {
      x: -0.79,
      y: 0.214763884163637
    },
    {
      x: 0.0699999999999998,
      y: 0.472096829819479
    },
    {
      x: -0.58,
      y: 0.280957308898564
    },
    {
      x: -0.25,
      y: 0.401293674317076
    },
    {
      x: -0.22,
      y: 0.412935577351785
    },
    {
      x: -0.47,
      y: 0.319177508782556
    },
    {
      x: -0.49,
      y: 0.312066949417391
    },
    {
      x: -0.36,
      y: 0.359423566782009
    },
    {
      x: -0.0800000000000001,
      y: 0.468118627986013
    },
    {
      x: -0.11,
      y: 0.456204687457683
    },
    {
      x: 0.24,
      y: 0.405165128302204
    },
    {
      x: -2.37,
      y: 0.00889404263033677
    },
    {
      x: 0.005,
      y: 0.498005296909259
    },
    {
      x: -0.65,
      y: 0.257846110805865
    },
    {
      x: 0.85,
      y: 0.197662543122693
    },
    {
      x: 0.73,
      y: 0.232695092300897
    },
    {
      x: -0.49,
      y: 0.312066949417391
    },
    {
      x: 2.81,
      y: 0.00247707499878569
    },
    {
      x: -0.58,
      y: 0.280957308898564
    },
    {
      x: 1.22,
      y: 0.111232437447835
    },
    {
      x: 0.96,
      y: 0.168527607466838
    },
    {
      x: -0.11,
      y: 0.456204687457683
    },
    {
      x: -0.15,
      y: 0.440382307629758
    },
    {
      x: 1.49,
      y: 0.0681121179667256
    },
    {
      x: 0.67,
      y: 0.25142889509531
    },
    {
      x: -1.06,
      y: 0.14457229966391
    },
    {
      x: 0.76,
      y: 0.223627292437599
    },
    {
      x: -0.2,
      y: 0.420740290560897
    },
    {
      x: -0.91,
      y: 0.181411254891797
    },
    {
      x: -0.11,
      y: 0.456204687457683
    },
    {
      x: 0.4,
      y: 0.344578258389676
    },
    {
      x: 0.0800000000000001,
      y: 0.468118627986013
    },
    {
      x: 0.33,
      y: 0.370699981059347
    },
    {
      x: 0.53,
      y: 0.298055965394876
    },
    {
      x: 0.67,
      y: 0.25142889509531
    },
    {
      x: -0.86,
      y: 0.194894521251808
    },
    {
      x: 0.46,
      y: 0.322758110250348
    },
    {
      x: 0.97,
      y: 0.16602324606353
    },
    {
      x: -1.11,
      y: 0.133499513242747
    },
    {
      x: -0.91,
      y: 0.181411254891797
    },
    {
      x: -2.21,
      y: 0.0135525811464201
    },
    {
      x: -0.0899999999999999,
      y: 0.464143607414828
    },
    {
      x: -1.36,
      y: 0.0869149619470848
    },
    {
      x: -0.91,
      y: 0.181411254891797
    },
    {
      x: -1.11,
      y: 0.133499513242747
    },
    {
      x: 0.56,
      y: 0.287739718849027
    },
    {
      x: -0.11,
      y: 0.456204687457683
    },
    {
      x: -1.29,
      y: 0.0985253290497478
    },
    {
      x: -0.24,
      y: 0.405165128302204
    },
    {
      x: 0.69,
      y: 0.24509709367431
    },
    {
      x: 2.19,
      y: 0.0142621184106688
    },
    {
      x: -0.45,
      y: 0.32635522028792
    },
    {
      x: -0.82,
      y: 0.206108053585813
    },
    {
      x: 0.26,
      y: 0.39743188679824
    },
    {
      x: -2.02,
      y: 0.0216916937676468
    },
    {
      x: 1.83,
      y: 0.0336249694196282
    },
    {
      x: -0.9,
      y: 0.18406012534676
    },
    {
      x: 0.74,
      y: 0.229649997164791
    },
    {
      x: -0.0899999999999999,
      y: 0.464143607414828
    },
    {
      x: -1.27,
      y: 0.102042315074819
    },
    {
      x: 0.76,
      y: 0.223627292437599
    },
    {
      x: -1.23,
      y: 0.109348552425692
    },
    {
      x: -0.54,
      y: 0.294598516215698
    },
    {
      x: 1.05,
      y: 0.146859056375896
    },
    {
      x: -1.31,
      y: 0.0950979177952391
    },
    {
      x: 0.32,
      y: 0.37448416527668
    },
    {
      x: 0.21,
      y: 0.416833836517558
    },
    {
      x: -0.58,
      y: 0.280957308898564
    },
    {
      x: -0.11,
      y: 0.456204687457683
    }
  ]

  const dataset = {
    data,
    fill: true,
    borderColor: 'black',
    label: 'win shares per 48 minutes'
  }

  return (
    <>
      <h1>Belle.js</h1>
      <Belle data={dataset} options={{}} />
    </>
  )
}

function main() {
  ReactDOM.render(<App />, document.getElementById('app'))
}

main()
