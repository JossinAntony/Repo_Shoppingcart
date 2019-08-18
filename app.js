const Express = require('Express');

var app = new Express();
app.set('view engine', 'ejs');
app.use(Express.static(__dirname+"/public"));

shoes=[
    {
        'name':'ASIAN Shoes Wonder-13 Grey Firozi Mesh Shoes',
        'price':'₹ 474.00 - ₹ 649.00 ',
        'description': 'Asian Shoes are for regular comfort wear. The body of this shoe is in a neutral grey colour with light blue accents. The upper material keeps air circulation while moderated ankles take full care of your feet when you go out for running.',
        'src':'/img/asian-wonder13.jpg',
        'fb1':'Very good quality at this price. Infact I am amazed to get the product at this price, really very good quality, durability, fitting very good.',
        'fb2':'Top value for money shoe. I use it in the gym for running and wear it while going outside. The shoe is pretty light and fits well. Also very comfortable. Durability wise is also good.',
        'fb3':'I absolutely love the design of the shoes, the packaging and it’s delivery. It’s probably the best under Rs. 1000. Considering its price, there’s nothing better you can ask for.'
    },
    {
        'name':'Bourge Men\'s Vega-1 Running Shoes',
        'price':'₹ 499.00 ',
        'description': 'Bourge sport shoes are premium quality light weight shoe optimised for running and all day usage. Unique mesh weaving offers incredible breathability. PU upper gives durability and sporty appearance to ”Bourge”. Flex grooves on sole offers strong grip, traction and stability. Soft foam gives better cushioning. Insoles of bounce back property provide comfort against impact.',
        'src':'/img/BourgeVega.jpg',
        'fb1':'They are good for walking but definitely not for running. Look wise they are great. comfortable in wearing for long hours and you will surely love its foam padding.',
        'fb2':'The product is good to see and I hope quality might also good. And the shoe is very comfortable to walk it has sponge .So really good and perfect. And the product is perfect but the box is not satisfied is already torn before I open, but no problem the shoe is good.',
        'fb3':'Osam product I am Happy this product Looking so Nice and comfortable..'
    },
    {
        'name':'Vector X Chaser-II Football Shoes',
        'price':'₹ 449.00 - ₹ 581.00',
        'description': 'Vector X is one of the established sports brands who provide stylish and innovative sports gear to most of the aspiring sport players as well as others. As a brand they have produced thousands of spectacular gear which have been used by numerous renowned sport personalities.',
        'src':'/img/Chaser-II.jpg',
        'fb1':'Perfect for occasional players like me. We play only on weekends and these shoes are great to play in.',
        'fb2':'Best boot for Rs 500 in the market. Best for beginners. Good control and power on the football.',
        'fb3':'Build quality is nice but I think material selection is bit skeptical. Sole is made of plastic and its very hard'
    },
    {
        'name':'Kraasa Men\'s Synthetic Sports Shoes',
        'price':'₹ 454.00 - ₹ 499.00',
        'description': 'Lend comfort to your feet all day long by cushioning them in these sneakers from Kraasa. The synthetic leather upper ensure comfort and durability, whereas the PVC ensures flexibility. Perfectly designed to match up with your stylish attitude, these sneakers will become your favourite instantly.',
        'src':'/img/Kraasa.jpg',
        'fb1':'Very comfortable Appreciated',
        'fb2':'Very Third class product..Totally mony lost',
        'fb3':'Light weight...... But it is suffocating foot by not allowing air to pass through the mesh... Mesh is covered with rexine inside, which makes it to suffocate and to develop bacterial growth on sweat.'
    },
    {
        'name':'Bourge Men\'s Running Shoes',
        'price':'₹ 399.00 ',
        'description': 'The Bourge sport shoes , premium quality light weight shoes, breathing shoe with flexibility provides the utmost comfort. High quality out sole with strong grip is ideal for running. Soft density polyurethane foam for better cushioning with socks of bounce back property. The methods of making is amalgamation of highly skilled worker and newest technology and is reflected by its durability. Apart form it\'s functionality it goes with trend both as contemporary and for young folks.',
        'src':'/img/BourgeRunning.jpg',
        'fb1':'Good shoes with cushioning inner soul but let\'s see how it will helps us.... Comfortable shoes for running and casual ware... Good to use',
        'fb2':'Ultra light good quality at this price',
        'fb3':'Premium looking and weightless shoes well within budget. Hope it lasts long'
    },
    {
        'name':'Vector X Armour Football Shoes',
        'price':'₹ 399.00 - ₹ 459.00 ',
        'description': 'Vector X Is One Of The Established Sports Brands Who Provide Stylish And Innovative Sports Gear To Most Of The Aspiring Sport Players As Well As Others. As A Brand They Have Produced Thousands Of Spectacular Gear Which Have Been Used By Numerous Renowned Sports Personalities.',
        'src':'/img/VectorX.jpg',
        'fb1':'very good quality for 319 rs. as same as the image. color combination is superb. surly recommend. but the size 3 for my nephew is little bit loose.',
        'fb2':'i bought it at 310, the best product quality wise. vector is going to be the lead brand in few months. just loved the design and comfort',
        'fb3':'It is made of rexine , and dosent look like it will last long , will be using it rarely on turf so hoping that it will last atleast 6 months. Also stiching has worn out from inside near the laces'
    },
    {
        'name':'Bersache Men\'s Blue Synthetic Sports Shoes',
        'price':'₹ 248.00 - ₹ 378.00  ',
        'description': 'Bersache introduces a globally inspired & innovative footwear line for the youth that is also cost-effective. As each pair of footwear is ultra light, comfortable, durable, ready to take on challenges and perform with gusto and energy. It is famous for its quality, worth able, style, comfort and many more reasons. It can also be worn on all your casual, formal, party wear or as well as any occasions to put your mark. ',
        'src':'/img/Bersache.jpg',
        'fb1':'Wrost product.. don\'t buy it',
        'fb2':'Very Good Product',
        'fb3':'Best gift for my brother'
    },
    {
        'name':'Bourge Men\'s Loire-61 Running Shoes',
        'price':'₹ 499.00 - ₹ 539.00',
        'description': 'Bourge is the leading manufacturer of sports and casual footwear. Bourge offers performance and sport-inspired lifestyle products in categories such as Running, Training and Fitness. Using high technology and design innovation, Bourge continually creates what is aspired and not just what is necessary. All Bourge products are meant to deliver high performance, durability and great comfort. This Bourge Sports Running shoe for men is extremely stylish it has EVA Bounce Back sole which gives extreme comfort during walking, jogging, running and in extreme playing conditions .This product has soft foam insert for amazing comfort.',
        'src':'/img/BourgeLoire.jpg',
        'fb1':'This is the Second shoe of same brand, the sole is too good for old age people and gives a light weight feel while walking.',
        'fb2':'Very good as expected',
        'fb3':'K kind but not tat comfortable'
    },
    {
        'name':'Bourge Men\'s Loire-64 Running Shoes',
        'price':'₹ 399.00 ',
        'description': 'Bourge is the leading manufacturer of sports and casual footwear. Bourge offers performance and sport-inspired lifestyle products in categories such as Running, Training and Fitness. Using high technology and design innovation, Bourge continually creates what is aspired and not just what is necessary. All Bourge products are meant to deliver high performance, durability and great comfort. This Bourge Sports Running shoe for men is extremely stylish it has EVA Bounce Back sole which gives extreme comfort during walking, jogging, running and in extreme playing conditions .This product has soft foam insert for amazing comfort.',
        'src':'/img/BourgeLoire64.jpg',
        'fb1':'The product is not up to the quality. Waste of money. As its sole is made up of very slippery kind of material and its not grippable in the legs. So don\'t buy this.',
        'fb2':'NOT RECOMMENDED FOR SUNNY DAY OUTS. AVERAGE PRODUCT.',
        'fb3':'Nice and wonderfull'
    },
    {
        'name':'Nivia Premier Carbonite Synthetic Football Studs',
        'price':'₹ 479.00 - ₹ 850.00 ',
        'description': 'Premier carbonite football shoes wraps your foot to give excellent traction whenever you play football. It should be your first choice if you are looking for both style and comfort in the same time. Boost your confidence and performance on the ground.',
        'src':'/img/Nivia.jpg',
        'fb1':'Nice studs and too comfortable after some use it will be comfortable because it is a bit tight from the toes best shoes',
        'fb2':'Comfortable, good fit, light',
        'fb3':'Very strong and sturdy , absolutely suitable for football . I got this to my nephew who is studying 6th std and he loves its colour and fit especially.'
    },
    {
        'name':'Vector X Victory Football Shoes (Black-Red)',
        'price':'₹ 499.00 - ₹ 832.00',
        'description': 'Vector x is one of the established sports brands who provide stylish and innovative sports gear to most of the aspiring sport players as well as others. As a brand they have produced thousands of spectacular gear which have been used by numerous renowned sport personalities. Football, volleyball, basketball, cricket, tennis, badminton and squash are the sports in whose accessories and gear they deal in regularly.',
        'src':'/img/VectorVictory.jpg',
        'fb1':'Very comfortable and feels good quality.',
        'fb2':'Everything is good about this boot but flexibility is the drawback.',
        'fb3':'A bit tight on the toes'
    },
    {
        'name':'ASIAN Swift-09 Grey Red Running Shoes',
        'price':'₹ 499.00 ',
        'description': 'Care Instructions: Wipe with a clean, dry cloth when needed Do not wash with detergent or in washing machine.',
        'src':'/img/asian-swift.jpg',
        'fb1':'I ordered size 9 but get size 7.And one shoe is big and one is small.Such a bad experience.',
        'fb2':'',
        'fb3':''
    },
    {
        'name':'ASIAN MARVEL-22 Training Shoes',
        'price':'₹ 466.00 - ₹ 599.00 ',
        'description': 'MaRVEL Training Shoes,Running Shoes,Gym Shoes,Canvas Shoes For Men is a flattering comfortable fit, an easy to maintain shoes that makes you feel confident and the infused print that guarantees you endless happiness.',
        'src':'/img/asian-marvel.jpg',
        'fb1':'Good shoes.. Quality and looks as expected...',
        'fb2':'Size of above product is small as compared with other brands. First our order was 8 no. but it is too small while other brands 8 no. is Fit.',
        'fb3':''
    },
    {
        'name':'Aqualite Men\'s Running Shoes',
        'price':'₹ 474.00 - ₹ 499.00 ',
        'description': 'Designed for fitness-conscious men, these sports shoes offer great comfort, cushioning and stability. Its optimum fit allows natural movement of the foot when you\'re on-the-go. This is a high performance pair of shoes meant for everyday use in running, walking, and gymming. Breathable outer surface and a sturdy sole to ensure comfort and support on your sporty adventure.',
        'src':'/img/Aqualite.jpg',
        'fb1':'Shoes look great and very lightweight loved it',
        'fb2':'Looks good bt cant be used for running / long distances.',
        'fb3':'It is value for money.'
    },
    {
        'name':'ASIAN Men\'s Mesh Bullet Range Running Shoes',
        'price':'₹ 424.00 - ₹ 599.00',
        'description': 'Care Instructions: Rotate your pair of shoes once every other day, allowing them to de-odorize and retain their shapes.Use Shoe bags to prevent any stains or mildew.Dust any dry dirt from the surface using a clean cloth. Do not use Polish or Shiner.',
        'src':'/img/asian-mesh.jpg',
        'fb1':'Great shoes at great price. Bought one before used it for around 2 years. Buying another hoping to use for another 2 years or so.',
        'fb2':'I would say it is a fantastic shoe and fits perfectly. I\'m walking around 8 km every day using this shoe. Till date there is nothing to complain against.',
        'fb3':'Not suitable.Size Not as per promise.westful expenditure for me'
    },
    {
        'name':'Acteo Men\'s Running Shoes',
        'price':'₹ 469.00',
        'description': 'These are worn usually with casual and informal attires but it also depends upon the choice of the wearer. Our Shoes are available in eye catching looks and designs.',
        'src':'/img/aceto.jpg',
        'fb1':'',
        'fb2':'',
        'fb3':''
    },
    {
        'name':'Vector X Volt Football Shoes',
        'price':'₹ 445.00 - ₹ 570.00',
        'description': 'Vector X Is One Of The Established Sports Brands Who Provide Stylish And Innovative Sports Gear To Most Of The Aspiring Sport Players As Well As Others. As A Brand They Have Produced Thousands Of Spectacular Gear Which Have Been Used By Numerous Renowned sports personalities.',
        'src':'/img/VectorVolt.jpg',
        'fb1':'Very good and durable item, perfect shoes for rough terrain if you are taking for rough areas ,go for it',
        'fb2':'Shoes good...it is defective...',
        'fb3':'Comfortable to wear, good for beginners. But the studds are a bit soft in construction and get wear and tear very fast. My son could use it barely for 03 months and it is gone with no studds under the sole ...'
    },
    {
        'name':'ASIAN Shoes Future-04 Grey Firozi Men Sports Shoes',
        'price':'₹ 499.00 - ₹ 599.00',
        'description': 'Looking at people’s clothes you know their style but looking at their shoes you know their class. We at Asian, aim at helping you define your class with our superb range of shoes. Since we understand the importance of quality, our shoes undergo a stringent quality check before being packed. We design each pair of shoes keeping in mind the comfort and performance of the wearer. Good fitting and uncompromising style is the Asian way because good shoes take you to good places.',
        'src':'/img/asian-future.jpg',
        'fb1':'Awesome product very light Weight shoes very happy',
        'fb2':'It says sports shoes and durable. I have used it only for a month and sole of right feet has almost disappeared.',
        'fb3':'Shoes are nice look wise but in comfort we cannot expect too much from them. They have minimal cushion effect and therefore one cannot expect to wear them for long duration.Overall the experience is okay.'
    },
    {
        'name':'Centrino Men\'s Hiking Boots',
        'price':'₹ 349.00 ',
        'description': 'Care Instructions: Allow your pair of shoes to air and de-odorize at regular basis; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth; do not use polish or shiner.',
        'src':'/img/centrino.jpg',
        'fb1':'Quality is very bad of this shoes',
        'fb2':'Nice and comfortable',
        'fb3':''
    },
    {
        'name':'Redchief Men\'s Leather Hiking Shoes',
        'price':'₹ 2,785.00',
        'description': 'The footwear range of Leayan Global Pvt. Ltd was launched under the brand name RED CHIEF in 1997 to meet growing demand for branded high quality leather footwear. The company has also taken the fashion industry by storm with their venture in the apparel and accessory sector. We are now offering solutions to all men\'s fashion and lifestyle requirements. A creative design team is responsible for generating attention grabbing ideas that entices consumers in target audience and Red Chief is well aware of that.',
        'src':'/img/redchief.jpg',
        'fb1':'This shoe is hurting my feets...It is great for trekking...',
        'fb2':'Nice shoes fit as expected nice color, but only problem comes in cleaning them, hard job to clean them.',
        'fb3':'Received damaged and used product and dull,Not worth to pay this amount.'
    },
    {
        'name':'Woodland Men\'s Trekking Boots OGB 2704117',
        'price':'₹ 2,363.00 - ₹ 3,061.00',
        'description': 'Woodland Men\'s Trekking Boots OGB 2704117',
        'src':'/img/woodlands.jpg',
        'fb1':'Shoes is So lite that I am fealling nothing. it\'s too cool . Really happy with the product by woodland a brand.....thanks Amazon for your quick service',
        'fb2':'Not comfortable. Not as per mentioned for Trekking.',
        'fb3':'Perfect size,perfect color,very good quality.'
    }
];

app.get('/',(req,res)=>{
    res.render('index', {shoes});
});

app.get('/home',(req,res)=>{
    res.render('index', {shoes});
});

app.get('/shoe-single/:id',(req,res)=>{
    const i = req.params.id;
    res.render('shoe-single', {'shoe_single':shoes[i]});
});

app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server running at http://localhost:3001");
});