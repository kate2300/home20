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
    }
    init() {
        this.input.addEventListener('input', () => {
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

const main = new Search()
main.init()