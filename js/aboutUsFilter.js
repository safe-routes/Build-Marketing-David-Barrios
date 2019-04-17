class Selection {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.role;
        this.optionSelected = document.querySelector('#memberSelection');

        // this.cards = Array.from(this.cards).map( card => new MemberCard(card));
        this.optionSelected.addEventListener('change', () => this.select());
    }
    select(){
        if(this.optionSelected.value == 'all'){
            this.element.style.display = 'flex';
        } 
        this.element.style.display = 'none';
    }
}

// class MemberCard{
//     constructor(cardElement){
//         this.cardElement = cardElement;
//     }
//     selected(){
//         this.cardElement.style.display = 'flex';
//     }
// }

const cards = document.querySelectorAll('.card');

cards.forEach( card => new Selection (card));