import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9dd9d2',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 90,
    marginHorizontal: 20,
  },
  containerList: {
    marginHorizontal: 20,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  modalTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#2ca6a4',
    width: '100%',
  },
  modalTitle: {
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 20,
    color: '#FFFFFF',
  },
  modalText: {
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 25,
    textAlign: 'center',
    width: '80%',
  },
  modalMessage: {
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 20,
    fontWeight: 'bold',
  },
});
