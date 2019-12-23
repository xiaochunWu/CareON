import * as echarts from '../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '测试',
      left: 'center'
    },
    color: ['#FF0000'],
    legend: {
      data: ['A'],
      top: 50,
      left: 'center',
      backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: false
    },
    tooptip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data:[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
            18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 
            34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 
            50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 
            66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 
            82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98],
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [{
      name: 'A',
      type: 'line',
      smooth: true,
      data: [-127, -162, -197, -229, -245, -254, -261, -265, -268, -268, -267,
        -265, -263, -260, -256, -253, -249, -247, -245, -243, -241, -238,
        -236, -234, -232, -231, -230, -229, -229, -229, -229, -230, -230,
        -230, -229, -229, -227, -225, -221, -218, -215, -213, -213, -213,
        -212, -211, -210, -209, -206, -203, -201, -198, -198, -200, -204,
        -210, -216, -224, -233, -243, -253, -262, -270, -275, -281, -286,
        -291, -292, -289, -282, -273, -264, -259, -255, -250, -246, -241,
        -237, -233, -229, -226, -222, -219, -216, -213, -209, -204, -195,
        -187, -179, -172, -169, -166, -164, -161, -159, -157, -156, -154]
    }]
  };
    chart.setOption(option);
    return chart;
}

Page({
  onShareAppMessage: function(res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦! ',
      path: '/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },
  onReady() {

  }
});