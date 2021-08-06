import * as React from 'react';
import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  DetailsRow,
  SelectionMode,
  DetailsRowCheck,
  IDetailsRowBaseProps,
  IDetailsRowCheckStyles,
  Selection,
  IDetailsListProps,
  IDetailsRowStyles,
} from '@fluentui/react/lib/DetailsList';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { MarqueeSelection } from '@fluentui/react';
import { getTheme } from '@fluentui/react/lib/Styling';

const theme = getTheme();

interface IPostsListState {
  selectedItem: Array<any>;
}

interface IPostsListProps {
  posts: any;
  currentIDForDel: (id: number) => void;
}

export class PostsList extends React.PureComponent<IPostsListProps, IPostsListState> {
  private _selection: Selection;
  private _columns: Array<IColumn>;

  constructor(props: IPostsListProps) {
    super(props);

    this._columns = [
      { key: 'column1', name: 'ID', fieldName: 'id', minWidth: 10, maxWidth: 50 },
      { key: 'column2', name: 'Title', fieldName: 'title', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Description', fieldName: 'body', minWidth: 100, maxWidth: 200, isResizable: true },
    ];

    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectedItem: this._selection.getSelection() }),
    });

    this.state = {
      selectedItem: [],
    };
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.posts !== this.props.posts && this.state.selectedItem.length !== 0) {
      this._handleRenderPage();
    }
  }

  public render(): JSX.Element {
    const { selectedItem } = this.state;
    const items = this.props.posts;

    return (
      <div>
        {selectedItem.length > 0 && (
          <p>
            <PrimaryButton
              text='Delete current post'
              onClick={this._handleClickPostDelete.bind(this, selectedItem[0].id)}
            />
          </p>
        )}
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey='set'
            layoutMode={DetailsListLayoutMode.justified}
            ariaLabelForSelectionColumn='Toggle selection'
            ariaLabelForSelectAllCheckbox='Toggle selection for all items'
            checkButtonAriaLabel='select row'
            onRenderDetailsFooter={this._onRenderDetailsFooter}
            selection={this._selection}
            selectionMode={SelectionMode.single}
            onRenderRow={this._onRenderRow}
          />
        </MarqueeSelection>
      </div>
    );
  }

  private _handleRenderPage = () => {
    let { checkId } = this.state.selectedItem[0];
    this._selection.selectToIndex(checkId + 1, true);
  };

  private _onRenderRow: IDetailsListProps['onRenderRow'] = (props) => {
    const customStyles: Partial<IDetailsRowStyles> = {
      root: {
        '& * div': {
          whiteSpace: 'normal',
        },
      },
    };
    if (props) {
      if (props.itemIndex % 2 === 0) {
        customStyles.root = { backgroundColor: theme.palette.themeLighterAlt };
      }

      return <DetailsRow {...props} styles={customStyles} />;
    }
    return null;
  };

  // click handler on button "Delete current post"
  private _handleClickPostDelete(id: number) {
    this.props.currentIDForDel(id);
  }

  private _onRenderDetailsFooter(detailsFooterProps: any): JSX.Element {
    return (
      <DetailsRow
        {...detailsFooterProps}
        columns={detailsFooterProps.columns}
        item={{}}
        itemIndex={-1}
        groupNestingDepth={detailsFooterProps.groupNestingDepth}
        selectionMode={SelectionMode.single}
        selection={detailsFooterProps.selection}
        onRenderItemColumn={_renderDetailsFooterItemColumn}
        onRenderCheck={_onRenderCheckForFooterRow}
      />
    );
  }
}

const _renderDetailsFooterItemColumn: IDetailsRowBaseProps['onRenderItemColumn'] = (item, index, column) => {
  if (column) {
    return (
      <div>
        <b>{column.name}</b>
      </div>
    );
  }
  return undefined;
};

const detailsRowCheckStyles: Partial<IDetailsRowCheckStyles> = { root: { visibility: 'hidden' } };

const _onRenderCheckForFooterRow: IDetailsRowBaseProps['onRenderCheck'] = (props): JSX.Element => {
  return <DetailsRowCheck {...props} styles={detailsRowCheckStyles} selected={true} />;
};
