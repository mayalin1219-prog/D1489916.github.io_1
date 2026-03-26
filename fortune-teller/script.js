// ==========================================
// 【運勢占卜資料區】
// 集中管理，方便修改成不同主題 (十種不同結果)
// ==========================================
const fortunes = [
    {
        title: "🌟 大吉大利",
        work: "事業運旺盛，你的努力將被主管看見，提案容易過關。",
        study: "思緒清晰，學習效率極高，考運絕佳。",
        love: "桃花盛開的時期！單身者有艷遇，有伴者感情升溫。",
        money: "偏財運旺！可能會有意外之財或是投資獲得良好回報。",
        quote: "幸運女神站在你這邊，勇敢地放手去做吧！"
    },
    {
        title: "☀️ 晴空萬里",
        work: "工作進展穩定，與同事合作無間，氣氛相當融洽。",
        study: "適合按部就班學習的時期，今天的你非常有耐心。",
        love: "感情平穩溫馨，適合安排一場簡單的小約會。",
        money: "收支平衡，可以適度犒賞自己吃點好料的。",
        quote: "保持充滿活力的笑容，好運自然會被吸引過來。"
    },
    {
        title: "🌱 穩步成長",
        work: "需要付出多一點精力處理細節，但辛苦的果實是甜美的。",
        study: "適合溫故知新，紮穩基本功對未來的挑戰大有幫助。",
        love: "多一點傾聽與包容，能化解彼此間潛在的小誤會。",
        money: "適合採取保守理財策略，避免衝動購物。",
        quote: "羅馬不是一天造成的，你的每一步都算數。"
    },
    {
        title: "💡 靈光乍現",
        work: "創意源源不絕！最適合提出新點子或解決卡關已久的難題。",
        study: "換個學習或筆記方法，會突然茅塞頓開，事半功倍。",
        love: "給對方一個意想不到的小驚喜，能為生活增添不少情趣。",
        money: "可能會發現新的開源管道或商機，值得深入研究。",
        quote: "別忽略腦海中閃過的任何一個瘋狂想法！"
    },
    {
        title: "🎭 充滿挑戰",
        work: "可能會遇到突發狀況，正考驗著你的臨場應變能力。",
        study: "遇到瓶頸卡關，別鑽牛角尖，請向老師或專業同學求助。",
        love: "容易因為小事情起口角，記得各退一步海闊天空。",
        money: "有破財風險，出門在外請看緊錢包，避免借貸。",
        quote: "挑戰是偽裝起來的禮物，跨過去你就會變得更強。"
    },
    {
        title: "☕ 宜放慢腳步",
        work: "待辦清單太長了，請注意事情的優先順序，別把自己逼太緊。",
        study: "注意力難以集中，與其硬撐，不如適度休息再重新出發。",
        love: "多留一點時間跟空間給自己，獨處也是一種浪漫。",
        money: "花錢如流水，拿出魔法小卡前請三思是否「真的需要」。",
        quote: "累了就休息一下吧，地球少了你還是會轉的。"
    },
    {
        title: "🌈 雨過天晴",
        work: "之前困擾你的麻煩事將告一段落，迎來輕鬆的轉機。",
        study: "終於突破盲點，解開困難題目的成就感會大幅提升。",
        love: "誤會冰釋，關係會有意想不到的良好及深入進展。",
        money: "先前的投資或套牢逐漸回本，財務壓力減輕不少。",
        quote: "風雨過後，總會看見最美麗的彩虹。"
    },
    {
        title: "🍀 遇見貴人",
        work: "遇到困難時，會有前輩或意想不到的同事伸出援手幫助。",
        study: "會遇到熱心且擅長該科目的朋友為你指點迷津。",
        love: "透過朋友的聚會或介紹，有非常大的機會認識不錯的新對象。",
        money: "聽取長輩或專家的理財建議，能幫你避開潛在風險。",
        quote: "常懷感恩的心，這世界比想像中更溫暖迷人。"
    },
    {
        title: "🔥 潛能爆發",
        work: "戰鬥力滿點，能以極高的效率清空堆積如山的待辦事項。",
        study: "精神集中力達到巔峰，適合短期衝刺記憶性科目。",
        love: "自信心爆棚！主動出擊成功率高，勇敢表達你的心意吧！",
        money: "有兼職、接案或是意想不到的外快機會，不妨積極爭取。",
        quote: "別懷疑，你比自己想像的還要強大好幾倍！"
    },
    {
        title: "🔮 神秘莫測",
        work: "局勢未明，主管的想法難以猜透，建議靜觀其變，不宜輕舉妄動。",
        study: "學習成效好壞參半，不要被單一成績影響，保持平常心即可。",
        love: "對方的心思難以捉摸，別急著要答案，讓子彈飛一會兒。",
        money: "可能會有一筆意料之外的開銷，但也可能有意外的進帳。",
        quote: "充滿未知才是最有趣的地方，享受這個探索的過程吧。"
    }
];

// ==========================================
// 【DOM 元素選取與邏輯區】
// ==========================================
const drawBtn = document.getElementById('draw-btn');
const retryBtn = document.getElementById('retry-btn');
const fortuneContainer = document.getElementById('fortune-container');
const resultContainer = document.getElementById('result-container');

const resultTitle = document.getElementById('result-title');
const resultWork = document.getElementById('result-work');
const resultStudy = document.getElementById('result-study');
const resultLove = document.getElementById('result-love');
const resultMoney = document.getElementById('result-money');
const resultQuote = document.getElementById('result-quote');

// 抽取運勢功能
function drawFortune() {
    // 增加按鈕點擊後的簡單動畫效果回饋
    drawBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
        drawBtn.style.transform = "";
        
        // 隨機選出一個結果
        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const fortune = fortunes[randomIndex];

        // 將資料填入 DOM
        resultTitle.textContent = fortune.title;
        resultWork.textContent = fortune.work;
        resultStudy.textContent = fortune.study;
        resultLove.textContent = fortune.love;
        resultMoney.textContent = fortune.money;
        resultQuote.textContent = `「${fortune.quote}」`;

        // 隱藏占卜按鈕區塊，顯示結果區塊
        fortuneContainer.classList.remove('active');
        fortuneContainer.classList.add('hidden');
        
        resultContainer.classList.remove('hidden');
        resultContainer.classList.add('active');
    }, 150);
}

// 重新占卜功能
function retryFortune() {
    // 隱藏結果區塊，顯示占卜按鈕區塊
    resultContainer.classList.remove('active');
    resultContainer.classList.add('hidden');
    
    fortuneContainer.classList.remove('hidden');
    fortuneContainer.classList.add('active');
}

// 綁定事件監聽器
drawBtn.addEventListener('click', drawFortune);
retryBtn.addEventListener('click', retryFortune);
