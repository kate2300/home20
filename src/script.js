const items = [
    "Молоко",
    "Орехи",
    "Кофе",
    "Сахар",
    "Хлеб",
    "Йогурт",
    "Сок",
    "Бананы",
    "Мандарины",
    "Шоколад",
    "Печенье",
];

class Search {
    constructor() {
        this.input = document.querySelector('#search')

        this.result = new Results()
        this.button = new Button(this.input)
    }
    init() {
        this.input.addEventListener('input', () => {
            if (!this.input.value) {
                this.button.disableButton(true)
            } else {
                this.button.disableButton(false)
            }

            if (items.includes(this.input.value)) {
                this.button.disableButton(true)
            }
            this.sortArray(this.input.value)
        })

    }
    sortArray(event) {
        let arr = []
        for (let i = 0; i < items.length; i++) {
            if (items[i].toLowerCase() === event.toLowerCase()) {
                arr.push(items[i])
            }
        }
        this.result.showResults(arr)

    }
}

class Results {
    constructor() {
        this.ul = document.querySelector('#results')

    }

    showResults(arr) {
        this.ul.textContent = ''
        for (let i = 0; i < arr.length; i++) {
            const li = document.createElement('li')
            li.textContent = arr[i]
            this.ul.append(li)
        }
    }

}

class Button {
    constructor(inputRef) {
        this.button = document.createElement('button')

        this.button.addEventListener('click', () => {
            items.push(inputRef.value)
            console.log(items)
            inputRef.value = ''
            this.button.disabled = true
        })
        this.wrapper = document.querySelector(".wrapper")
        this.wrapper.append(this.button)
        this.button.disabled = true

    }
    disableButton(state) {
        this.button.disabled = state
    }

}

const main = new Search()
main.init()