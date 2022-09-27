import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const LANGUAGE_KEY = {
  ENGLISH: 'en',
};

export const LANGUAGE_NAME = {
  ENGLISH: 'english',
};

export const LANGUAGE_LIST = [
  {
    languageKey: LANGUAGE_KEY.ENGLISH,
    title: 'english',
    isRTL: false,
  },
];

export const ICON_TYPES = {
  AntDesign: 'AntDesign',
  IonIcons: 'Ionicons',
  FontAwesome: 'FontAwesome',
  FontAwesome5: 'FontAwesome5',
  SimpleLineIcons: 'SimpleLineIcons',
  MaterialIcons: 'MaterialIcons',
  MaterialCommunityIcons: 'MaterialCommunityIcons',
  Entypo: 'Entypo',
  EvilIcons: 'EvilIcons',
  Octicons: 'Octicons',
  Feather: 'Feather',
  Foundation: 'Foundation',
  Fontisto: 'Fontisto',
};

export const INFORMATION_LIST = [
  {
    key: 'documentInformation',
    title: 'Document information',
    desc: 'Quantity: 0',
  },
  {
    key: 'clientHomeCoordinates',
    title: "Client's home coordinates",
    desc: "Get the coordinates so the construction team can find the customer's house more easily",
    subTitle: 'Lat',
    subTitleII: 'Long',
  },
  // {
  //   key: 'photoSurveyInformation',
  //   title: 'Photo, survey information',
  //   desc: 'Take survey photos, take notes for construction team',
  //   subTitle: 'Quantity: 0',
  // },
];

export const SUPPLY_INFORMATION_LIST = [
  {
    key: 'quantity',
    title: 'Quantity',
    rightText: '0',
  },
  {
    key: 'amount',
    title: 'Amount',
    rightText: '0.00',
  },
];

export const PAPERS_LIST = [
  {
    key: 'houseOwnership',
    title: 'House ownership',
    rightText: '2',
  },
  {
    key: 'temporaryResidenceCertificate',
    title: 'Temporary residence certificate',
    rightText: '0',
  },
  {
    key: 'permanentResidence',
    title: 'Permanent residence',
    rightText: '1',
  },
  {
    key: "copyOfPreviousContractOwner'sElectricityBill",
    title: "Copy of previous contract owner's electricity bill ",
    rightText: '0',
  },
  {
    key: 'certificateOfBusinessRegistration',
    title: 'Certificate of business registration',
    rightText: '0',
  },
  {
    key: 'InvestmentLicenseOrCertificateOfIncorporation',
    title: 'Investment license or certificate of incorporation',
    rightText: '0',
  },
];

export const CHOOSE_CAMERA_LIST = [
  {
    key: 'takePhoto',
    title: 'Take Photo',
    iconType: ICON_TYPES.Entypo,
    icon: 'camera',
  },
  {
    key: 'chooseFromLibrary',
    title: 'Choose from library',
    iconType: ICON_TYPES.FontAwesome,
    icon: 'photo',
  },
];

export const Map_LIST = [
  {
    key: 'hybrid',
    title: 'Hybrid',
    iconType: ICON_TYPES.FontAwesome5,
    icon: 'map-marker-alt',
  },
  {
    key: 'satellite',
    title: 'Satellite',
    iconType: ICON_TYPES.FontAwesome5,
    icon: 'satellite',
  },
  {
    key: 'street',
    title: 'Street',
    iconType: ICON_TYPES.FontAwesome,
    icon: 'street-view',
  },
];
