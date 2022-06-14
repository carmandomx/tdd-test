/*
Stack methods:
    push: Va a meter un elemento a la pila
    pop: Va a sacar el ultimo elemento de la pila
    peek: Va a regresar el ultimo elemento de la pila pero sin hacer pop





*/



class Stack {
    constructor() {
        this.position = -1;
        this.items = {};
    }


    push(newElement) {
        this.items = {
            ...this.items,
            [++this.position]: newElement
        }

        return `Added: ${newElement}`
    }

    peek() {
        console.log(this.items)
        return this.items[this.position]
    }
    
}

describe('MyStack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('should initialized my properties', () => {
        expect(stack.position).toBe(-1);
        expect(stack.items).toEqual({});
    })

    it('should add a new element to the Stack', () => {
        expect(stack.push('a')).toBe('Added: a')
        expect(stack.position).toBe(0);
        expect(stack.push(3)).toBe('Added: 3')
        expect(stack.position).toBe(1);
        expect(stack.push('stack')).toBe('Added: stack')
        expect(stack.position).toBe(2);
    })

    it('should show the last item on the Stack', () => {
        stack.push('stack')
        expect(stack.peek()).toBe('stack')
        stack.push(3)
        expect(stack.peek()).toBe(3)
        stack.push('a');
        expect(stack.peek()).toBe('a');
    })

    it('should pop the last element, return it and delete it from items property', () => {})

})