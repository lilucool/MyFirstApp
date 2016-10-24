angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})


.factory('Heros', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var heros = [
    {
	   id: 0,
      "bio": "亚托克斯是一位传奇战士，也是一个被称为暗裔的上古种族里仅存的五位战士之一。他优雅镇定地挥舞着巨剑，用令人迷离的剑式在千军万马中穿行。每当敌人倒下，亚托克斯那把如同活物般的巨剑便会啜饮着他们的鲜血，同时增强他的力量，并为他残暴、优雅的杀戮战役提供给养。最早关于亚托克斯的记述来源于尘封历史中的记载。它述说着两大仅留下名字的杰出派系护国军和法术领主的战争。在那时，法术领主取得了一系列压倒性的胜利，他们发誓要肃清敌人，护国军处在灭绝的边缘。",
      "shortname": "Aatrox",
      "name": "暗裔剑魔",
      "type2": "4",
	  "type": "14"
	},{
		 id: 1,
      "bio": "跟其他游荡在艾欧尼亚南部丛林中的狐狸不同，阿狸总觉得她跟魔法世界有一种说不清道不明的联系，一种不完整的联系。在内心深处，她觉得她难以适应这具生而拥有的肉体，梦想有一天可以变成人类。这个梦想看起来遥不可及，直到有一天人类战场上发生的事情改变了她。那是一副惨烈的景象，战场上横七竖八地躺着或重伤或死去的士兵。她被其中一人吸引了：一个身穿长袍的男人，他的生命正在极速地流逝，身边萦绕着一个渐渐衰灭的魔法盾。阿狸走近了他并感到自己内心深处的一些东西被激发了，以某种她难以理解的方式向这个男人展开。",
      "shortname": "Ahri",
      "name": "九尾妖狐",
      "type2": "3",
	  "type": "1"
	},{
		 id: 2,
      "bio": "艾欧尼亚岛上存在一个上古教派，致力于维护均衡。规则与混乱、光明与黑暗——万物必须和谐共存，这就是宇宙的真理。该教派名为均衡教派，维护世界均衡的神圣使命则由三个暗影战士来执行。阿卡丽便是这三名暗影勇士中一员，她肩负着修枝的神圣职责——将威胁瓦洛兰大陆和谐的敌人消灭干净。阿卡丽自小和母亲一起习武，练就一身好武功。母亲的训练严酷无情，她的基本原则是：“我们是在替天行道”。阿卡丽十四岁加入均衡教派，那时她就能空手砍断链条。毋庸置疑，她将继承母亲“暗影之拳”的名号。",
      "shortname": "Akali",
      "name": "暗影之拳",
      "type2": "1",
	  "type": "3"
	},{
		 id: 3,
      "bio": "The Art College in New Dehli has sponsored Hassum on scholarship for his entire undergraduate career at the university, seeing great promise in his contemporary paintings of landscapes - that use equal parts muted and vibrant tones, and are almost a contradiction in art. Hassum will be speaking on 'The use and absence of color in modern art' during Thursday's agenda.",
      "shortname": "Hassum_Harrod",
      "name": "Hassum",
      "type2": "2",
	  "type": "2"
	},{
		 id: 4,
      "bio": "A native of New Orleans, much of Jennifer's work has centered around abstract images that depict flooding and rebuilding, having grown up as a teenager in the post-flood years. Despite the sadness of devastation and lives lost, Jennifer's work also depicts the hope and togetherness of a community that has persevered. Jennifer's exhibit will be discussed during Tuesday's Water in Art theme.",
      "shortname": "Jennifer_Jerome",
      "name": "Jennifer",
      "type2": "2",
	  "type": "2"
	},{
		 id: 5,
      "bio": "LaVonne's giant-sized paintings all around Chicago tell the story of love, nature, and conservation - themes that are central to her heart. LaVonne will share her love and skill of graffiti art on Monday's schedule, as she starts the painting of a 20-foot high wall in the Rousseau Room of Hotel Contempo in front of a standing-room only audience in Art in Unexpected Places.",
      "shortname": "LaVonne_LaRue",
      "name": "LaVonne",
      "type2": "2",
	  "type": "3"
	},{
		 id: 6,
      "bio": "Constance received the Fullerton-Brighton-Norwell Award for Modern Art for her mixed-media image of a tree of life, with jewel-adorned branches depicting the arms of humanity, and precious gemstone-decorated leaves representing the spouting buds of togetherness. The daughter of a New York jeweler, Constance has been salvaging the discarded remnants of her father's jewelry-making since she was five years old, and won the New York State Fair grand prize at the age of 8 years old for a gem-adorned painting of the Manhattan Bridge.",
      "shortname": "Constance_Smith",
      "name": "Constance",
      "type2": "2",
	  "type": "3"
	 },{
		 id: 7,
      "bio": "A first-year student at the Roux Academy of Art, Media, and Design, Riley is already changing the face of modern art at the university. Riley's exquisite abstract pieces have no intention of ever being understood, but instead beg the viewer to dream, create, pretend, and envision with their mind's eye. Riley will be speaking on the 'Art of Abstract' during Thursday's schedule",
      "shortname": "Riley_Rewington",
      "name": "Riley",
      "type2": "2",
	  "type": "3"
	},{
		 id: 8,
      "bio": "A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art.",
      "shortname": "Xhou_Ta",
      "name": "Xhou",
      "type2": "2",
	  "type": "3"
	},{
		 id: 9,
      "bio": "A senior at the China International Art University, Xhou has become well-known for his miniature sculptures, often the size of a rice granule, that are displayed by rear projection of microscope images on canvas. Xhou will discuss the art and science behind his incredibly detailed works of art.",
      "shortname": "Xhou_Ta",
      "name": "Ta",
      "type2": "2",
	  "type": "4"
	 }
  ];

  return {
    all: function() {
      return heros;
    },
    remove: function(hero) {
      heros.splice(heros.indexOf(heros), 1);
    },
    get: function(heroId) {
      for (var i = 0; i < heros.length; i++) {
        if (heros[i].id === parseInt(heroId)) {
          return heros[i];
        }
      }
      return null;
    }
  };
});