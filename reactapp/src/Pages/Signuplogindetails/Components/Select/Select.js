// import {Select} from 'antd';
// export const Dropdown = ({placeholder, defaultValue, options, onChange}) => (
//   <Select
//   style={{width:'80%', borderRadius:'10px',color:'teal',marginLeft:'10px' , marginTop:'3%'}}
//     placeholder={placeholder}
//     onChange={onChange}
//     options={options}
//     defaultValue={defaultValue}
//   />
// );




import {Select} from 'antd';
export const Dropdown = ({placeholder, defaultValue, options, onChange}) => (
  <Select
  style={{width:'80%', borderRadius:'10px',color:'teal',marginLeft:'10px' , marginTop:'1%'}}
    placeholder={placeholder}
    onChange={onChange}
    options={options}
    defaultValue={defaultValue}
  />
);