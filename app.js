jQuery(document).ready(function ($) {
    //switched - flag for the menu opening
    let switched = false;

    //switching the menu length
   $('#menu_button').on('click', function(){
       if (switched) {
           switched = false;
           $('#side_menu').animate({width: '50px'}, 600);
       } else {
           switched = true;
           $('#side_menu').animate({width: '300px'}, 600);
       }
   });

   //gridList - array of each layout part
   let gridList = [{width: 2, height: 3}, {width: 1, height: 3}];
   arrangeGrid();

   //when on of the buttons is clicked the array of layout parts changes, and the grid is rearranged
   $('.layout_option').on('click', function(){
        let option = $(this).attr('id');
        switch (option) {
            case 'first':
                gridList = [{width: 2, height: 1},{width: 1, height: 1},{width: 1, height: 1}, {width: 1, height: 1}, {width: 1, height: 2}, {width: 1, height: 1}, {width: 1, height: 1}];
                arrangeGrid();
                break;
            case 'second':
                gridList = [{width: 1, height: 1},{width: 2, height: 1}, {width: 1, height: 1}, {width: 2, height: 1}, {width: 1, height: 1}, {width: 2, height: 1}];
                arrangeGrid();
                break;
            case 'third':
                gridList = [{width: 1, height: 1},{width: 1, height: 1},{width: 1, height: 1}, {width: 1, height: 1}, {width: 2, height: 2}, {width: 1, height: 1}];
                arrangeGrid();
                break;
            case 'fourth':
                gridList = [{width: 1, height: 1},{width: 1, height: 1},{width: 1, height: 1}, {width: 1, height: 2}, {width: 1, height: 2}, {width: 1, height: 2}];
                arrangeGrid();
                break;
        }
    });

   //arrangeGrid - function, which arranges each layout part of the grid
   function arrangeGrid() {
        gridList.forEach(function (element, index) {
            let width = 'width_'+ element.width;
            let height = 'height_'+ element.height;
            $($('.list_column')[index]).attr('class', 'list_column');
            $($('.list_column')[index]).addClass(width);
            $($('.list_column')[index]).addClass(height);
        });
   }
});