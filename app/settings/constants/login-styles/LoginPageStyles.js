import { primaryColor } from "../Colors";

export const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
      },
      logo: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 20,
      },
      title: {
        fontSize: 32,
        marginBottom: 40,
        fontWeight: 'bold',
        color: 'black',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: '100%',
      },
      button: {
        width: '100%',
        height: 50,
        backgroundColor: primaryColor,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
      signUp: {
        color: '#000',
      },
      signUpLink: {
        color: primaryColor,
      },
};