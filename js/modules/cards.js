import {getResource} from '../services/service';

function cards () {
    class MenuCard { // созд только верстку
        constructor ( src , alt, title, descr, price, parentSelector, ...classes){
         this.src = src;
         this.alt = alt;
         this.title = title;   
         this.descr = descr;
         this.price = price;
         this.classes = classes; // массив rest
         this.parent = document.querySelector(parentSelector);// куда мы будем переносить
         this.transfer = 27;
         this.changeToUAH();
        }
    
        changeToUAH() {  // конвертер
            this.price = this.price * this.transfer;
        }
    
    
        render() {// будем с помощью него созд html структуру 
            const element = document.createElement ('div');// удаляем содерж элемнтов и вкладываем свое(интерполяция)
            if (this.classes.length === 0) {
                this.element = 'menu__item';
                element.classList.add(this.element);
            } else{
                this.classes.forEach(className => element.classList.add(className));
            }
           
            element.innerHTML =  `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                        `;
                  this.parent.append(element);//перенос элемента в родителя 
            
                
        }
    
    }
    
    //исп класс 
    
    getResource('http://localhost:3000/menu')//создание карточек столько сколько их нужно  с сервера
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => {//деструктр объекта
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });// при помощи запроса получаю массив, перебираю его и тот объект котрый внутри я деструктр. => предаю
        //в конструктор котрый созд. новую карточку и рендерит ее на страницу
    
}

export default  cards;