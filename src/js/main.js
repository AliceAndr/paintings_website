import modals from "./modules/modal";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from "./modules/mask";
import checkTextInputs from "./modules/checkTextInputs";
import showMoreStyles from "./modules/showMoreStyles";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureExample from "./modules/pictureExample";
import accordion from "./modules/accordion";
import burger from "./modules/burger";

modals();
sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
sliders('.main-slider-item', 'vertical');
forms();
mask('[name="phone"]');
checkTextInputs('[name="name"]');
checkTextInputs('[name="message"]');
showMoreStyles('.button-styles', '.styles-2')
calc('#size', '#material', '#options', '.promocode', '.calc-price');
filter();
pictureExample('.sizes-block');
accordion('.accordion-heading', '.accordion-block');
burger('.burger-menu', '.burger');
