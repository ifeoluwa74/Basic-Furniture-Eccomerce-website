"use strict";

export class List{
    constructor(){
        this.listSize = 0;
        this.pos = 0;
        this.clear = this.clear;
        this.find = this.find;
        this.toString = this.toString;
        this.insert = this.insert;
        this.append = this.append;
        this.remove = this.remove;
        this.front = this.front;
        this.end = this.end;
        this.prev = this.prev;
        this.next = this.next;
        this.length = this.length;
        this.currPos = this.currPos;
        this.moveTo = this.moveTo;
        this.getElement = this.getElement;
        this.length = this.length;
        this.contains = this.contains;
    }
    append(element){
        this.dataStore[this.listSize++] = element;
    }
    find(element){
        for (let i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return i;
            }
        }
            return -1;
    }
    remove(element){
        const foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
        return false;
       
    }
    length(){
        return this.listSize;
    }
    toString(){
        return this.dataStore;
    }
    insert(element,after){
        let insertPos = this.find(after);
        if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
        }
        return false;
    }
    clear(){
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    contains(element){
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
            return true;
            }
            }
            return false;
    }
    front(){
        this.pos = 0;
    }
    end(){
        this.pos = this.listSize-1;
    }
    prev(){
        if (this.pos > 0) {
            --this.pos;
            }
    }
    next(){
        if (this.pos < this.listSize-1) {
            ++this.pos;
            }
    }
    currPos(){
        return this.pos;
    }
    moveTo(position){
        this.pos = position;
    }
    getElement(){
        return this.dataStore[this.pos];
    }
}