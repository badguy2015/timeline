<template>
  <div>
    <h1>/home/project/detail</h1>
    <ul class="timeline" id="app">
      <!-- Item 1 -->
      <li v-for="(item, index) in tuling" :key="item.id">
        <div :class="index % 2 === 0 ? 'direction-r' : 'direction-l'">
          <div class="flag-wrapper">
            <span class="hexa"></span>
            <span class="flag">{{ item.title }}</span>
            <span class="time-wrapper"
              ><span class="time">{{ item.time }}</span></span
            >
          </div>
          <div class="desc">
            {{ item.content }}
          </div>
          <div>
            <ul class="images-box">
              <li>
                <img class="attachment attachment-l" :src="item.attachment" />
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  },
  data () {
    return {
      timeline: [
        {
          id: 1,
          title: '旧民主主义时期a',
          time: '1939年',
          content:
            '1839年林则徐在广州禁烟。6月在虎门海滩销烟。英国政府决定发动侵略中国战争。1840年6月，鸦片战争爆发，英军从广州转攻厦门，攻陷定海，北犯天津。鸦片战争后，中国少数人有了民族觉醒的意识。',
          image_list: []
        },
        {
          id: 2,
          title: '《穿鼻草约》b',
          time: '1841年1月',
          content:
            '1841年1月，琦善同英国签订《穿鼻草约》，道光帝不满，派奕山到广州主持军事，对英作战。关天培在虎门炮台抗击英军，壮烈牺牲。5月，英军进逼广州，弈山投降。三元里人民进行抗英斗争。9月，定海再次陷落，三总兵抗敌牺牲。',
          image_list: ['/static/images/easyneqbetter.png']
        },
        {
          id: 3,
          title: '《穿鼻草约》c',
          time: '1841年1月',
          content:
            '1841年1月，琦善同英国签订《穿鼻草约》，道光帝不满，派奕山到广州主持军事，对英作战。关天培在虎门炮台抗击英军，壮烈牺牲。5月，英军进逼广州，弈山投降。三元里人民进行抗英斗争。9月，定海再次陷落，三总兵抗敌牺牲。',
          image_list: ['/static/images/easyneqbetter.png']
        },
        {
          id: 4,
          title: '《穿鼻草约》d',
          time: '1841年1月',
          content:
            '1841年1月，琦善同英国签订《穿鼻草约》，道光帝不满，派奕山到广州主持军事，对英作战。关天培在虎门炮台抗击英军，壮烈牺牲。5月，英军进逼广州，弈山投降。三元里人民进行抗英斗争。9月，定海再次陷落，三总兵抗敌牺牲。',
          image_list: []
        },
        {
          id: 5,
          title: '《穿鼻草约》e',
          time: '1841年1月',
          content:
            '1841年1月，琦善同英国签订《穿鼻草约》，道光帝不满，派奕山到广州主持军事，对英作战。关天培在虎门炮台抗击英军，壮烈牺牲。5月，英军进逼广州，弈山投降。三元里人民进行抗英斗争。9月，定海再次陷落，三总兵抗敌牺牲。',
          image_list: ['/static/images/easyneqbetter.png']
        }
      ],
      current_num: 1,
      tuling: [
        {
          id: 1,
          title: '第二次世界大战爆发',
          time: '1939年9月1日',
          content:
            '1939年9月1日，人类回想起了被战争所支配的恐惧。德国军队在那一天对波兰发起闪击战，第二次世界大战爆发。',
          image_list: ['/static/images/war2.jpg']
        },
        {
          id: 111,
          title: '图灵参加面试',
          time: '1901年',
          content:
            '恩尼格玛密码机,加密数据存在1亿亿种可能,图灵参与破解密码的机密任务,在布莱奇利庄园工作',
          image_list: ['/static/images/bletchley.jpg']
        },
        {
          id: 2,
          title: '发明图灵计算机',
          time: '1902年',
          content: '图灵潜心研究发明图灵计算机',
          image_list: []
        },
        {
          id: 3,
          title: '成功破解德军密码',
          time: '1903年',
          content: '图灵计算机成功破解德军密码',
          image_list: []
        },
        {
          id: 4,
          title: '保密2年',
          time: '1904年',
          content:
            '之后两年内,成功破解德军密码的成果被保密,仅在重要的节点使用,避免德军知道',
          image_list: []
        },
        {
          id: 5,
          title: '图灵是同性恋者被发现',
          time: '1952年',
          content: '1952年，图灵家中遭遇盗窃，警察因此发现他是同性恋者。',
          image_list: [
            '/static/images/easyneqbetter.png',
            '/static/images/easyneqbetter.png',
            '/static/images/easyneqbetter.png',
            '/static/images/easyneqbetter.png',
            '/static/images/war2.jpg'
          ]
        },
        {
          id: 6,
          title: '图灵自杀',
          time: '1954年6月7日',
          content:
            '经历一年政府强制的荷尔蒙药物治疗,艾伦·图灵被证实与1954年6月7日自杀身亡,享年41岁.' +
            '在1885年至1967年间,依据英国法律,有大约4万9千名同性恋被指控犯有严重猥亵罪,女王伊丽莎白二世准许给与艾伦·图灵终身皇家赦免,以此向他前所未有的伟大贡献表示敬意.历史学家估计恩尼格码密码的破解,使二战至少提前两年结束,超过1千4百万人的生命得以挽救,而这件事却被政府保密长达50多年之久',
          image_list: ['/static/images/easyneqbetter.png']
        }
      ]
      // ,'test': <?php echo json_encode($data['list']); ?>
    }
  }
}
</script>
<style>
.images-box {
  list-style-type: none;
  padding: 0;
}
.images-box li {
  padding: 0.3em 0;
}
.attachment {
  width: 100%;
}
.attachment:hover {
  transform: scale(2);
  z-index: 15;
  position: relative;
  left: -50%;
}
.attachment-l:hover {
  left: -50%;
}
.attachment-r:hover {
  left: 50%;
}
</style>
