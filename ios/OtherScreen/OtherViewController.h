//
//  OtherViewController.h
//  ChatYellow
//
//  Created by FLP-9-MuhammadRabbani on 29/03/23.
//

#import <UIKit/UIKit.h>

@interface OtherViewController : UIViewController

@end


// OtherViewController.m

#import "OtherViewController.h"

@implementation OtherViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    // Set the background color to white
    self.view.backgroundColor = [UIColor blackColor];
  
    UILabel *label = [[UILabel alloc] init];
    label.text = @"this is other native screen";
    label.textAlignment = NSTextAlignmentCenter;
    label.font = [UIFont systemFontOfSize:24];
    label.translatesAutoresizingMaskIntoConstraints = NO;

    [self.view addSubview:label];

    [NSLayoutConstraint activateConstraints:@[
        [label.centerXAnchor constraintEqualToAnchor:self.view.centerXAnchor],
        [label.centerYAnchor constraintEqualToAnchor:self.view.centerYAnchor]
    ]];
}

@end
