import { Product } from './models/product';
import { Injectable } from '@angular/core';
import { PersistenceService } from '../persistence.service';

@Injectable({
  providedIn: 'root'
})

export class ProductCatalogService {

  defaultProductCatalog = [
    {
        "id": "Xbox One Series X", 
        "name": "Xbox One Series X", 
        "price": 499.99, 
        "description": "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever. And when you add Xbox Game Pass Ultimate (membership sold separately or included when you choose Xbox All Access), you get an instant library of 100+ high-quality games, including day one releases from Xbox Game Studios like Halo Infinite, Forza Horizon 5, and Microsoft Flight Simulator.", 
        "imageUrl": "https://images.kabum.com.br/produtos/fotos/128560/console-microsoft-xbox-series-x-1tb-preto-rrt-00006_1601067029_g.jpg"
    },
    {
        "id": "Xiaomi Mi 11", 
        "name": "Xiaomi Mi 11", 
        "price": 679.15, 
        "description": "Xiaomi's latest flagship, packing a 108Mp professional-level camera, and the top tier processor from Qualcomm: Snapdragon 888", 
        "imageUrl": "https://a-static.mlcdn.com.br/618x463/smartphone-xiaomi-mi-11-256gb-branco-5g-8gb-ram-tela-681-cam-tripla-selfie-20mp/magazineluiza/228160100/a4d3ca4792b922cc1449f808104c8c45.jpg" },
  
    {
        "id": "Nintendo Switch", 
        "name": "Nintendo Switch", 
        "price": 299.99, 
        "description": "Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers. PLAY ANYWHERE. At home the system rests in the Nintendo Switch dock, which lets you play with family and friends on a TV in the comfort of your living room. By simply lifting Nintendo Switch from the dock at any time, the system instantly transitions to handheld mode, and the same great gaming experience that was being enjoyed at home now travels with you. The portability of Nintendo Switch is enhanced by its 6.2-inch screen, which displays bright, high-definition gameplay at the park, on an airplane, in a car, or at a friend's apartment. Nintendo Switch comes with two Joy-Con that can each act as a standalone controller with an analog stick, a full complement of face and shoulder buttons, built in motion-sensing technology and new HD Rumble. They can be inserted into a Joy-Con grip accessory to be used like a traditional controller, held comfortably in each hand for independent left and right motion controls, or shared between two players for instant multiplayer gaming in front of the TV or out on the go. This bundle includes the Nintendo Switch console and Nintendo Switch dock in black, with contrasting left and right Joy-Con controllers-one blue, one red. It also includes all the extras you need to get started.",
        "imageUrl": "https://images.kabum.com.br/produtos/fotos/135586/nintendo-switch-32gb-1x-joycon-neon-azul-vermelho-hbdskaba2_1610110214_g.jpg" },
  
    {
        "id": "Asus Zephyrus G15", 
        "name": "Asus Zephyrus G15", 
        "price": 1899.90, 
        "description": "ASUS ROG Zephyrus Gaming Laptop. Enjoy everyday gaming with this ASUS notebook PC. The AMD Ryzen 9-5900HS processor and 16GB of RAM let you run graphics-heavy games smoothly, while the potent NVIDIA GeForce RTX 3080 graphics produce high-quality visuals on the fast 15.6-inch 165hz QHD display. This ASUS ROG notebook PC has 1TB SSD that shortens load times and offers ample storage.", "imageUrl": "https://m.media-amazon.com/images/I/61OX3JLafUS._AC_SL1000_.jpg"
    },
    {
        "id": "Mac Mini (2020)", 
        "name": "Mac Mini (2020)", 
        "price": 699.99, 
        "description": "The Apple M1 chip takes Mac mini, the most versatile, do-it-all Mac desktop, to a whole new level of performance. With up to 3x faster CPU performance, up to 6x faster graphics, a powerful Neural Engine with up to 15x faster machine learning, and superfast unified memory — all in an ultracompact design.* So you can create, work, and play on Mac mini with speed and power beyond anything you ever imagined.", 
        "imageUrl": "https://cdn1.appsisecommerce.com.br/clientes/cliente10694/produtos/30166/Z1277.jpg"
    }
  ]


  products: Product[] = this.persistenceService.loadFromLocalStorage('products', this.defaultProductCatalog);

  constructor(private persistenceService: PersistenceService) { }
}
