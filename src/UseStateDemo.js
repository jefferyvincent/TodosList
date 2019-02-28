import  React, { Component, useState } from 'react';

const soMuchText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique varius metus, id lacinia odio finibus et. Vestibulum faucibus erat id tortor sagittis, sollicitudin ullamcorper est rhoncus. Donec volutpat odio elit, facilisis condimentum turpis vehicula et. Quisque faucibus quam eget vestibulum accumsan. Pellentesque vehicula, magna vel mollis ullamcorper, metus felis malesuada ligula, sit amet elementum libero dui a odio. Duis placerat nulla sed ornare porta. In enim justo, interdum a vestibulum nec, pellentesque aliquet nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec bibendum risus. Nam mattis tristique massa id ullamcorper. Suspendisse tristique tempor porttitor. Ut pulvinar porta accumsan. Maecenas tristique nisl nisl, vel lacinia ipsum viverra a. Nunc aliquet sem nec leo fermentum molestie. In sodales lacus lectus, non lacinia ligula vulputate at. Vestibulum vel enim id urna semper tempus.";

// old way!
class ShowMoreComponent extends Component {
    state = {
        expanded: false,
    }

    render () {
        const shortText = soMuchText.slice(0, 50);
        const { expanded } = this.state;

        return (
            <div>
                {expanded ? soMuchText : shortText}{' '}
                <button onClick={() => this.setState(state => ({expanded: !state.expanded}))} >
                {expanded ? 'Less' : 'More'}
                </button>
            </div>
        )
    }
}

// New way
// https://www.youtube.com/watch?v=jd8R0a2Ur8Q

/// Advanced Hooks
/// https://www.youtube.com/watch?v=YKmiLcXiMMo

export default function SomeMoreFunction () {
    const shortText = soMuchText.slice(0, 50);
    const [expanded, setExpanded] = useState(false);
    const [count, incrementCount] = useState(0);
    return (
        <div>
            {expanded ? soMuchText : shortText}{' '}
            <button onClick={() => setExpanded(expanded => !expanded)} >
                {expanded ? 'Less' : 'More'}
            </button>
            Current count : {count}
            <button onClick={()=> incrementCount(count + 1)}> increment</button>
        </div>
    )
}