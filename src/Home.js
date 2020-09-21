import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-fe.ssl-images-amazon.com/images/G/09/2020/x-site/monthly_deal/08/gw/dayof/081318_GW_DO_10._CB405102350_.jpg" alt=""/>

                <div className="home__row">
                    <Product id={1} title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" rating={5} />
                    <Product id={2} title="Apple iPad (10.2 Inch, wi-fi" price={379.9} image="https://m.media-amazon.com/images/I/61J6uczVvJL._AC_UL320_.jpg" rating={4}/>
                </div>

                <div className="home__row">
                    <Product id={3} title="最新版】iPhone HDMIアダプター、変換ケーブル Lightning 1080PデジタルAV HDMIケーブル1080P HD Lightning Digital TVアダプタ iphone テレビ youtube テレビ 設定不要 大画面 音声同期出力 高解像度対応 "
                        price={18.9} image="https://m.media-amazon.com/images/I/61k3XppAU3L._AC_UL320_.jpg"
                        rating={3}
                    />
                    <Product id={4} title="Dell ノートパソコン Inspiron 15 3583 Pentium Gold ホワイト 20Q41W/Win10S/15.6FHD/4GB/128GB SSD Ins 15 3583 20Q41W"
                        price={399.9} image="https://m.media-amazon.com/images/I/515tVMlSINL._AC_SR160,160_.jpg" rating={4}
                    />
                    <Product id={5} title="サーモス 真空断熱カップ 280ml バニラ JDH-280C VAN" 
                    
                        price={9.99} image="https://images-na.ssl-images-amazon.com/images/I/51GEmD5jtoL._AC_SL1500_.jpg" rating={3}
                    />
                </div>                

                <div className="home__row">
                    <Product id={6} title="SUNTQ タンブラー 水筒 マグボトル コーヒー専用 魔法瓶 二重構造 真空断熱 保温保冷 直飲み プレゼント用"
                        price={20.4} image="https://images-na.ssl-images-amazon.com/images/I/61W7KWkHAxL._AC_SL1000_.jpg" rating={5}
                    />

                </div>                
            </div>
        </div>
    )
}

export default Home
