import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		backgroundColor:'#404040'
	},
	timer:{
		marginTop:-160,
		color:'#12e4e7',
		fontSize:65,
		fontWeight:'bold'
	},
	btnArea:{
		flexDirection:'row',
		marginTop:80,
		height:40
	},
	btn:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#12E4E7',
		height:40,
		margin:18,
		borderRadius:9
	},
	btnText:{
		fontSize:20,
		fontWeight:'bold',
		color:'#404040'
	},
	resultado:{
		marginTop:50
	},
	textResultado:{
		fontSize:25,
		fontStyle:'italic',
		color:'#fff'
	}
});
export default styles;