import {h, Component} from 'preact';

export default function Header(){
    return (
        <header>
            <h2>{this.props.title}</h2>
        </header>
    );
};