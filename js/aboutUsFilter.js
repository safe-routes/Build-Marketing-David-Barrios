class Selection {
    constructor(element){
        this.element = element;
        this.data = this.element.dataset.role;
        this.optionSelected = document.querySelector('#memberSelection');
        this.optionSelected.addEventListener('change', () => this.select());
    }
    select(){
        this.element.style.display = 'none';
        if(this.optionSelected.value == 'all'){
            this.element.style.display = 'flex';
        } else if(this.data == this.optionSelected.value){
            this.element.style.display = 'flex';            
        }
    }
}
const cards = document.querySelectorAll('.card');

cards.forEach( card => new Selection (card));