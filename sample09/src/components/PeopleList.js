import React from "react";

// PeopleList内部での利用なのでこちらはexportしない
class PersonEntry extends React.Component {
    render() {
        // 一覧の要素をレンダリングする
        // 詳細ページへのリンクを設定する
    }
}

export default class PeopleList extends React.Component {
    render() {
        return (
           <div className="list-group">
                {this.props.people.map(
                    person => <PersonEntry key={person.id} person={person} />
                )}
            </div>
        );
    }
}
