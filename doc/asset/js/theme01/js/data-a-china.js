/**
 * 
 */

// gdp    'NOBTV' : '营运公交车辆数',
    
dataMap.dataANOBTV = dataFormatter({
    2016:[8049.494799,8344.856089,3385.68706,3127.623156,5785.60838,5071.115674,3844.608949,3281.690141,8178.81977,6217.27687,5915.952773,2563.781836,4720.478495,2607.580214,4707.050949,2868.665317,3409.562348,2982.043663,5065.233698,2523.330463,2876.465222,3429.725934,2612.009938,1643.655232,1920.345498,1999.438944,3342.853326,1958.022621,2940.915493,3289.843505,2992.326845],
    2011:[7193.465851,7101.200924,2834.898527,2574.387241,4721.682848,4218.804571,3155.289407,2705.087399,7453.747286,5264.389376,5089.463925,2074.757428,3990.555104,2118.166741,4085.306633,2455.328017,2787.641411,2441.089802,4406.959104,2075.889371,2375.719217,2747.168111,2136.169049,1322.839897,1569.791395,1691.533333,2710.436412,1609.667969,2398.632327,2669.273302,2488.544622],
    2006:[6533.887097,6125.285016,2450.309923,2147.157864,3962.672905,3504.374568,2656.478102,2244.380554,6808.348416,4411.946223,4357.534117,1641.301582,3337.842335,1727.251805,3579.3717,2053.384632,2265.926573,2038.665314,3897.587364,1597.850082,1914.594907,2284.018888,1728.928528,1106.214306,1349.759352,1491.081081,2192.057955,1325.855186,1941.238779,2165.296,1981.032886],
    2001:[6276.115189,5713.443878,2291.024467,2144.649663,3476.350245,3167.689455,2350.438917,2173.691503,6571.63475,3991.49446,4117.937452,1442.813366,2974.171476,1584.329545,3284.833811,1910.96935,1983.701628,1811.128527,3719.469322,1457.848837,1760.023419,2040.739697,1548.443106,990.4226919,1252.942989,1352.226027,1967.342657,1241.403371,1838.66426,1948.090615,1963.026748],
    });

//'LOBTR' : '营运线路里程',

dataMap.dataALOBTR = dataFormatter({
    2016:[67.49380882,117.8745387,401.2884961,178.5193432,526.3094279,437.0454027,464.6926155,443.7923839,53.23391564,387.9959489,289.774849,337.685992,433.3978495,309.9532086,412.3534295,374.1201534,446.2139632,419.6528199,253.7077582,440.7384284,751.6875713,289.3182597,370.6223602,209.3456327,304.6879724,245.7755776,326.1822068,264.7230889,273.028169,288.1690141,515.6315075],
    2011:[63.38430173,112.0708237,356.2427023,155.1426973,443.0744337,372.8182857,382.2897707,339.9165145,49.56578376,322.7983225,249.7815311,290.2501259,369.2580558,270.502017,374.2469754,346.4210526,374.825419,353.957382,219.0384063,363.3535792,621.2082854,237.5667244,308.6252331,179.6579477,240.8474576,229.0666667,264.6452477,234.09375,239.6447602,251.64297,493.6521739],
    2006:[63.59677419,104.9267101,313.8100654,139.3609571,378.1936534,325.9387238,357.8722628,301.7067433,51.50226244,289.6107554,220.4473086,243.9161638,322.6241135,247.8925993,340.7222809,291.8783599,313.9685315,307.4758039,198.4471866,300.3480231,534.9421296,212.2420427,273.7458766,155.5753463,233.5593962,215.8108108,211.8701368,194.5401174,192.8186715,203.6,351.8943956],
    2001:[63.70976849,104.2346939,291.1131779,91.93198476,371.5016367,301.7427578,335.3035845,284.6901961,52.21858944,270.5629992,210.2762855,231.1475143,318.2660071,240.9954545,318.8541999,281.979001,311.6792155,296.6144201,199.4389973,301.8583887,510.5854801,202.6769989,272.3212091,149.9416018,224.644508,207.6027397,202.7218935,181.2112897,190.5595668,192.4595469,324.2937588],
    });

// 'TNAPT' : '年客运量',

dataMap.dataATNAPT = dataFormatter({
    2016:[1858.583457,4375.143911,1812.851816,1846.71862,3238.392425,2772.564454,2041.280466,1555.140845,3377.882403,3190.692493,3030.492403,1392.322386,2437.956989,1423.91934,2492.177026,1643.276523,1704.748176,1419.343542,2517.599238,1221.812702,814.709236,1898.951696,1370.078261,632.5540502,816.307493,689.0759076,1852.949506,927.3907956,1716.866197,1652.816901,1460.344047],
    2011:[1727.003058,3726.120092,1488.418126,1464.465585,2575.926375,2280.416,1640.447761,1311.022698,3134.311767,2764.510103,2624.918304,1080.513681,2037.051178,1148.112954,2215.111598,1406.313663,1356.01257,1117.684932,2204.245762,978.6724512,657.0771001,1510.960139,1077.958981,517.4073009,700.4541504,546.4,1458.125837,775.3789063,1322.611012,1307.914692,1186.338673],
    2006:[1535.241935,3247.42671,1273.78874,1165.392472,2080.553295,1821.317669,1292.671533,1061.348667,2715.737557,2377.256082,2257.105762,800.0685043,1638.106929,884.3524368,1995.969377,1160.588173,1055.608392,887.7911333,1917.048371,696.3632619,513.2291667,1206.285414,820.0207697,417.4780888,564.9814045,461.5878378,1136.68366,597.7455969,1032.908438,1059.712,893.7424734],
    2001:[1483.009599,3154.57483,1245.005008,1243.729112,1790.585106,1659.059096,1132.816386,1129.346405,2842.522186,2189.29915,2219.382195,684.4221679,1461.511404,807.9113636,1865.984921,1088.131297,889.8739275,788.2335423,1870.231477,630.7599668,495.9601874,1077.062346,715.5799951,380.987208,539.8965441,395.7534247,1038.493814,576.377891,1005.631769,987.0226537,971.7315814],
    });

// 'BBTVTTP' : '万人公共汽电车辆保有量',

dataMap.dataABBTVTTP = dataFormatter({
    2016:[6123.417533,3851.837638,1171.546748,1102.385193,2020.906527,1861.505818,1338.635868,1282.756912,4747.703451,2638.588429,2595.685521,833.7734584,1849.123656,873.7076649,1802.520494,851.269706,1258.600208,1143.047301,2293.926702,860.7814855,1310.068415,1241.455978,871.3093168,801.7555491,799.3500324,1064.587459,1163.721614,765.9087363,951.0211268,1348.85759,1016.35129],
    2011:[5403.078491,3263.010008,990.2376981,954.7789591,1702.682039,1565.570286,1132.551875,1054.148187,4269.869735,2177.080951,2214.76409,703.993621,1584.245871,699.5517705,1495.947017,702.5933014,1056.803422,969.4474886,1983.674935,733.8633406,1097.433832,998.6412478,749.5848353,625.7746479,628.489787,916.0666667,987.665328,600.1953125,836.3765542,1109.71564,808.5537757],
    2006:[4935.048387,2772.931596,862.7111174,842.4044354,1503.925956,1357.118176,1005.934307,881.3251438,4041.108597,1745.079385,1879.981046,597.316914,1377.111293,595.006769,1242.680042,600.9180985,896.3496503,843.3983765,1782.091807,601.1387974,866.4236111,865.4914306,635.1618815,533.1608708,551.2185517,813.6824324,843.5041588,533.5694716,715.5116697,901.984,735.3960167],
    2001:[4729.395822,2454.634354,754.9062813,808.9885664,1314.263502,1206.887601,882.3189466,759.654902,3676.893975,1531.632311,1688.278972,527.2436838,1194.394064,535.4227273,1099.993629,540.8590519,782.1484854,726.2805643,1649.798848,525.2304817,753.4777518,761.0003522,560.5419022,459.4938821,488.401937,748.869863,726.12695,483.8141905,642.4729242,768.6084142,667.0014078],
    });

// 'ATInv' : '公共交通固定资产投资',

dataMap.dataAATInv = dataFormatter({
    2016:[532.4071322,303.6605166,126.7808314,62.59671584,155.020145,199.890486,86.79883594,128.351591,434.4610141,347.8782124,306.9979865,106.3873995,244.9354839,89.68582888,190.7377815,105.1342139,110.2240361,78.53850819,316.1646835,100.2540366,237.981756,135.7588215,77.09565217,46.20928221,48.00475059,57.55775578,106.3398344,52.35959438,51.1443662,123.6463224,79.77365324],
    2011:[513.0071356,290.6774442,96.99610787,53.72132065,125.1011327,167.6274286,77.29159083,102.2410644,435.3017803,330.5311984,297.0754544,89.33523586,183.8694828,76.32451815,169.1854401,82.21477937,98.53526536,70.65601218,269.5096255,88.02386117,216.7203682,92.33275563,69.42945929,40.13797068,48.5549761,48.46666667,84.59170013,42.9765625,45.13321492,95.62401264,65.64759725],
    2006:[571.2204301,251.4087948,87.06283765,50.5719288,116.6192026,139.4310067,73.04379562,78.71928907,559.9819005,259.3329065,249.5905989,81.21676725,179.1080196,69.02075812,140.4002112,65.6667018,95.47377622,62.45863253,243.8923988,71.86573311,140.9259259,80.12941588,66.96884545,38.49307323,44.87858237,44.86486486,64.37349074,39.67514677,41.38240575,76.096,53.37193145],
    2001:[476.9000565,193.7755102,73.51695522,48.67780709,111.8248773,116.0625724,66.82516459,63.91372549,438.7389071,209.4988405,201.8476592,70.29665852,139.3184941,64.08181818,117.3356695,54.34510553,92.2570478,53.30250784,207.970282,58.75415282,111.9437939,67.35117999,55.7421971,29.14627364,43.02883557,51.64383562,51.98224852,36.76989416,36.02888087,62.86407767,42.13514782],
   });

// 'UAPD' : '城区人口密度'
dataMap.dataAUAPD = dataFormatter({
    2016:[1097.280832,558.302583,103.0258252,144.5365989,180.2820306,172.3864933,75.53655875,96.70839854,970.3451214,329.1695151,499.77851,84.4252681,231.8306452,79.64349376,170.2199855,92.4797614,117.1535255,75.96876895,277.5944788,95.88159311,120,241.4045906,107.8447205,85.69328337,98.51651911,104.620462,115.4448303,56.57176287,110.1408451,209.9843505,130.7243096],
    2011:[949.8521916,441.1008468,85.54628857,125.4336877,140.1456311,146.1188571,69.21004732,79.46517088,847.138515,267.6223154,427.1305306,66.50495216,207.8472786,54.12147019,141.9952023,74.18181818,97.98708101,70.49619482,254.6461067,83.41214751,89.89643268,172.117851,81.37973897,66.54498419,81.50369405,90.26666667,103.0120482,39.2734375,96.85612789,154.6129542,103.0663616],
    2006:[862.1666667,375.5700326,74.73272676,105.5266997,118.4296176,129.0486063,65.99635036,59.47203346,816.4162896,204.4788732,359.9943139,58.65274833,166.9939989,37.25180505,110.3379092,52.69526721,83.76048951,62.84264752,225.3988154,69.3616145,76.07638889,136.4008395,64.09651802,54.97314108,76.95033909,78.27702703,90.20928361,34.54794521,81.92100539,120.864,92.11208893],
    2001:[857.8147939,313.0102041,60.20031478,85.28583993,89.64402619,105.4623407,53.85515728,46.3869281,660.5371322,167.2867818,317.2390637,51.15077425,136.7546029,29.675,93.477753,43.88906565,68.82332341,52.40125392,199.3732942,51.70473422,55.42154567,106.7312434,50.52101253,42.14404894,61.11820383,76.78082192,77.23507262,28.41630733,65.9566787,104.8543689,80.69920225],
   });