import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

import { FORM_STATUSES } from '../../consts/formConsts';
import transitionEvent from '../../helpers/transitionEventHelper';

import * as S from './styles';
import * as A from './../Actions/styles';

class Collapsible extends Component {
  state = {
    isOpened: false
  };

  bodyRef = React.createRef();
  contentRef = React.createRef();

  handleCollapsibleClick = () => {
    this.bodyRef.current.style.height = `${this.bodyRef.offsetHeight}px`;

    requestAnimationFrame(() => {
      this.setState(prevState => ({ isOpened: !prevState.isOpened }), () => {
        this.bodyRef.current.style.height = this.state.isOpened ? `${this.contentRef.current.offsetHeight}px` : 0;
      });
    });
  };

  componentDidMount() {
    this.contentRef.current.addEventListener(transitionEvent, () => {
      if (this.state.isOpened) this.bodyRef.current.style.height = 'auto';
    });
  };

  renderStatusType(type) {
    switch (type) {
      case "save":
        return <S.Collapsible.StatusGreen>Zapisany</S.Collapsible.StatusGreen>;

      case "archived":
        return <S.Collapsible.StatusGray>Archiwum</S.Collapsible.StatusGray>;

      case "sent-email":
        return <S.Collapsible.StatusBlue>Wysłany</S.Collapsible.StatusBlue>;

      case "visited":
        return <S.Collapsible.StatusYellow>Po wizycie w SM</S.Collapsible.StatusYellow>;

      case "punished":
        return <S.Collapsible.StatusGreen>Wystawiono mandat</S.Collapsible.StatusGreen>;

      case "ignored":
        return <S.Collapsible.StatusRed>Zignorowany</S.Collapsible.StatusRed>;

      default:
      return <S.Collapsible.StatusGreen>Zapisany</S.Collapsible.StatusGreen>;
    }
  }

  renderStatusButton(type) {
    switch (type) {
      case "save":
        return 'Zapisany';

      case "archived":
        return 'Archiwum';

      case "sent-email":
        return 'Wysłany';

      case "visited":
        return 'Po wizycie w SM';

      case "punished":
        return 'Wystawiono mandat';

      case "ignored":
        return 'Zignorowany';

      default:
      return 'Zapisany';
    }
  }

  render() {
    const { number, status, address, carInfo, date, id } = this.props.data;

    const Status = ({ action, type, status, id, children}) => (
      <A.ButtonStatus isActive={status === type} onClick={() => action(type, id)} disabled={status === type}>
        {this.renderStatusButton(type)}
      </A.ButtonStatus>
    );

    return (
      <S.Collapsible>
        <S.Collapsible.Header onClick={() => this.handleCollapsibleClick()}>
          <S.Collapsible.Text>{number}</S.Collapsible.Text>
          <S.Collapsible.Text>{address.address}</S.Collapsible.Text>
          <S.Collapsible.Text>{this.renderStatusType(status)}</S.Collapsible.Text>

          <S.Collapsible.Button>{this.state.isOpened ? 'hide' : 'show'}</S.Collapsible.Button>
        </S.Collapsible.Header>

        <S.Collapsible.Body ref={this.bodyRef}>
          <S.Collapsible.Content ref={this.contentRef}>
            <S.Collapsible.Text>
              <span>W dniu </span>
              <strong><Moment format="DD MMMM YYYY">{date}</Moment></strong>
              <span> roku o godzinie </span>
              <strong><Moment format='HH:mm'>{date}</Moment></strong>
              <span> byłam świadkiem pozostawienia samochodu o nr rejestracyjnym </span>
              <strong><span>{carInfo.plateId || carInfo.plateIdFormImage}</span></strong>
              <span> pod adresem </span>
              <strong><span>{address.address}.</span></strong>
            </S.Collapsible.Text>

            <S.Collapsible.Actions>
              <A.ButtonFilled>Szczegóły</A.ButtonFilled>
              <A.ButtonFilled>PDF</A.ButtonFilled>
            </S.Collapsible.Actions>

            <div>
              <p>Zmień status</p>

              <Status action={this.props.action} status={status} id={id} type={FORM_STATUSES.save} />
              <Status action={this.props.action} status={status} id={id} type={FORM_STATUSES.sentEmail} />
              <Status action={this.props.action} status={status} id={id} type={FORM_STATUSES.visited} />
              <Status action={this.props.action} status={status} id={id} type={FORM_STATUSES.ignored} />
              <Status action={this.props.action} status={status} id={id} type={FORM_STATUSES.punished} />
              <Status action={this.props.action} status={status} id={id} type={FORM_STATUSES.archived} />
            </div>
          </S.Collapsible.Content>
        </S.Collapsible.Body>
      </S.Collapsible>
    );
  }
}

Collapsible.propTypes = {
  data: PropTypes.shape({
    number: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.shape({
      address: PropTypes.string
    }),
    carInfo: PropTypes.shape({
      plateId: PropTypes.string,
      plateIdFormImage: PropTypes.string
    })
  }),
  action: PropTypes.func
};

export default Collapsible;
