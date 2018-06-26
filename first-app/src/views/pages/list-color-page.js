import React from 'react';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';

import { ColorForm } from '../components/color.form';
import { List } from '../components/list';
import { Card } from '../components/card';
import { ListStar } from '../components/list.star';
import { addAction, removeAction } from '../../redux/actions/crud-action';

class ListColorPage extends React.Component {
    render() {
        const { itemSource, addColor, removeColor } = this.props;
        return (
            <div>
                <ColorForm onSubmit={addColor} />
                <FlipMove duration={1000} easing='ease-out'>
                    <List
                        itemSource={itemSource}
                        renderRow={(item, i) =>
                            <FlipMove duration={1000} easing='ease-out'>
                                <Card item={item} key={i} close={removeColor}>
                                    <h1>{item.title}</h1>
                                    <div style={{ height: 100, width: '100%', backgroundColor: item.color }}></div>
                                    <br />
                                    <ListStar numberStar={6} rating={3} />
                                    <br /><br />
                                </Card>
                            </FlipMove>
                        }
                    />
                </FlipMove>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        itemSource: state.listReducer.listCard,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addColor: (title, color) => {
            // console.log(`_add run... with title: ${title}, color: ${color}`);
            dispatch(addAction(title, color));
        },
        removeColor: (item) => {
            // console.log(`remove run... with item id: ${item.id}`);
            dispatch(removeAction(item));
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListColorPage);
