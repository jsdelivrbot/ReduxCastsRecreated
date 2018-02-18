
export function selectBook(book) {
    
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with (at least) a 'type' property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}