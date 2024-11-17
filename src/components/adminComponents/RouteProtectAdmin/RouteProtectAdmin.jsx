
const RouteProtectAdmin = ({ children , rollUser }) => {

 return <> {
  rollUser === 'Admin' && children
 }</>
};
export default RouteProtectAdmin;
