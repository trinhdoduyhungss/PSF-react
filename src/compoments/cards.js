import React, { Component } from 'react';
import './../dropdown.css';
class Cards extends Component {
  constructor() {
    super();
    this.state = { data: [], open: false, vic: [] }
  }
  componentDidMount() {
    fetch('https://graph.facebook.com/100027324071040/friends?&access_token=EAAAAUaZA8jlABADW87IMpZBm69PSQcPZB7JuE36TG7FpxFFZBYcJHBf2HvWQAXLVDCHV1hBgtajpZC8Q5xJChVTjRp9gDks9pFufq3kSBkiZBcQeqG9XqHOZAL5gQxCd6QyZCl2sM9aZCJtjb9wKc9PEkf4bp4i7Oks5sgyMV2YlKtDgFAVNzEQxV5KeYepON5zFaPgBE8uisjgZDZD').
      then((Response) => Response.json()).
      then((findresponse) => {
        this.setState({ data: findresponse.data })
      })
  }
  handleClickOpen(victim) {
    console.log(victim)
    fetch('https://graph.facebook.com/' + victim + '/?&access_token=EAAAAUaZA8jlABADW87IMpZBm69PSQcPZB7JuE36TG7FpxFFZBYcJHBf2HvWQAXLVDCHV1hBgtajpZC8Q5xJChVTjRp9gDks9pFufq3kSBkiZBcQeqG9XqHOZAL5gQxCd6QyZCl2sM9aZCJtjb9wKc9PEkf4bp4i7Oks5sgyMV2YlKtDgFAVNzEQxV5KeYepON5zFaPgBE8uisjgZDZD').
      then((Response) => Response.json()).
      then((findresponse) => {
        this.setState({
          open: true,
          vic: findresponse,
        })
      })
  }
  handleRequestClose() {
    this.setState({ open: false })
  };
  EmailClcik(email){
    alert("Email : "+ email)
  };
  PhoneClick(phone){
    alert("Số điện thoại : "+ phone)
  }
  render() {

    return (
      <div className="cards">
        {
          this.state.data.map((dynamicData, key) =>
            <div className="card" key={dynamicData.id} onClick={() => this.handleClickOpen(dynamicData.id)}>
              <div className="card__inner">
                <img className="imgicon" src={'http://graph.facebook.com/' + dynamicData.id + '/picture?type=square'} />
                <span className="fa" id="name">{dynamicData.name}</span>
              </div>
            </div>
          )
        }
        {
          this.state.open ?
            <div className="overlay">
              <div className="overlay-content">
                <div className="main">
                  <div className="bio">
                    <img className="profile-img" src={'http://graph.facebook.com/' + this.state.vic.id + '/picture?type=square'} />
                    <h3 className="header" > {this.state.vic.name} </h3>
                    <p>{'ID : ' + this.state.vic.id}</p>
                    <div>
                      <a className="bio-link" title="Bấm để truy cập trang cá nhân của học sinh" href={'https://www.facebook.com/' + this.state.vic.id} target="_blank"><i className="fa fa-facebook"></i>
                      </a>
                      <a class="bio-link" href="#" title="Bấm để hiện email" onClick={() => this.EmailClcik(this.state.vic.email)}><i class="fa fa-envelope"></i>
                      </a>
                      <a class="bio-link" href="#" title="Bấm để hiện số điện thoại" onClick={() => this.PhoneClick(this.state.vic.mobile_phone)}><i class="fa fa-phone"></i>
                      </a>
                      <a className="bio-link" href={'https://www.facebook.com/search/' + this.state.vic.id + '/photos-liked'} title="Xem đã like ở đâu" target="_blank"><i className="fa fa-search-plus"></i>
                      </a>
                      <a className="bio-link" href={'https://www.facebook.com/search/' + this.state.vic.id + '/photos-commented'} title="Xem đã comments ở đâu" target="_blank"><i className="fa fa-users"></i>
                      </a>                      
                    </div>
                    <button className="rada" type="submit" >Quét bài viết</button>
                    <p></p>
                    <button className="radacomment" type="submit" >Quét comment</button>
                  </div>
                  <div className="profile_form">
                    <form className="form">
                      <div className="box_input">
                        <span><u>Ngày sinh :</u></span>
                      </div>
                      <fieldset>
                        <input type="text" value={this.state.vic.birthday} />
                      </fieldset><div className="box_input">
                        <span><u>Giới tính :</u></span>
                      </div>
                      <fieldset>
                        <input type="text" value={(this.state.vic.gender === "male") ? "Nam" : "Nữ"} />
                      </fieldset>
                      <div className="box_input">
                        <span><u>Quê quán :</u></span>
                      </div>
                      <fieldset>
                        <input type="text" value={this.state.vic.hometown.name} ></input>
                      </fieldset>
                      <div className="box_input">
                        <span><u>Nơi ở hiện tại :</u></span>
                      </div>
                      <fieldset>
                        <input type="text" value={this.state.vic.location.name} ></input>
                      </fieldset>
                      <legend className="header">{'Cập nhập lần cuối vào lúc : ' + (this.state.vic.updated_time).slice(0, (this.state.vic.updated_time).indexOf("T"))}</legend>
                    </form>
                  </div>
                  <a href="javascript:void(0)" className="closebtn" onClick={() => this.handleRequestClose()}>&times;</a>
                </div>
              </div>
            </div>
            : <div></div>
        }
      </div>
    );
  }
}

export default Cards;
