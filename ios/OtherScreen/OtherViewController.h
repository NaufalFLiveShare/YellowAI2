//
//  OtherViewController.h
//  ChatYellow
//
//  Created by FLP-9-MuhammadRabbani on 29/03/23.
//

#import <UIKit/UIKit.h>

@interface OtherViewController : UIViewController

@property (nonatomic, strong) UIButton *closeButton;

@end


// OtherViewController.m

#import "OtherViewController.h"

@implementation OtherViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Set the background color to white
     self.view.backgroundColor = [UIColor blackColor];
   
    // Create and configure close button
    self.closeButton = [UIButton buttonWithType:UIButtonTypeSystem];
    [self.closeButton setTitle:@"Close" forState:UIControlStateNormal];
    [self.closeButton addTarget:self action:@selector(closeButtonTapped) forControlEvents:UIControlEventTouchUpInside];
    self.closeButton.translatesAutoresizingMaskIntoConstraints = NO;
    [self.view addSubview:self.closeButton];
    
    // Add constraints for the close button
    [NSLayoutConstraint activateConstraints:@[
        [self.closeButton.topAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.topAnchor constant:16],
        [self.closeButton.trailingAnchor constraintEqualToAnchor:self.view.safeAreaLayoutGuide.trailingAnchor constant:-16],
        [self.closeButton.widthAnchor constraintEqualToConstant:80],
        [self.closeButton.heightAnchor constraintEqualToConstant:40]
    ]];
    
    // Create and configure label
    UILabel *label = [[UILabel alloc] init];
    label.text = @"this is other native screen";
    label.textAlignment = NSTextAlignmentCenter;
    label.font = [UIFont systemFontOfSize:24];
    label.translatesAutoresizingMaskIntoConstraints = NO;
    [self.view addSubview:label];
    
    // Add constraints for the label
    [NSLayoutConstraint activateConstraints:@[
        [label.centerXAnchor constraintEqualToAnchor:self.view.centerXAnchor],
        [label.centerYAnchor constraintEqualToAnchor:self.view.centerYAnchor]
    ]];
}

- (void)closeButtonTapped {
    // Handle button tap event here
    [self dismissViewControllerAnimated:YES completion:nil];
}

@end
