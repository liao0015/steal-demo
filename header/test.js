import {h, render} from 'preact';
import Header from './header';
import QUnit from 'qunitjs';
import 'qunitjs/qunit/qunit.css';

//Use the fixture element in the HTML as a container for the component
const fixtureElement = document.getElementById('qunit-fixture');

QUnit.test('hello test', function(assert){
    const message = 'Welcome to your first StealJS and React app!';

    //Render the component
    const rendered = render(<Header title={message} />, fixtureElement);

    //Make sure the right text is rendered
    assert.equal(rendered.textContent.trim(), message, 'Correct title');
});

//Start the test suite
QUnit.start();