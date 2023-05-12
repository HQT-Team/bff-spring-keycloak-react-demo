package com.hqt.backofficebff.controller;

import com.hqt.backofficebff.dto.AuthenticatedUser;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @GetMapping("/authentication/user")
    public ResponseEntity<AuthenticatedUser> user(@AuthenticationPrincipal OAuth2User principal) {
        AuthenticatedUser authenticatedUser = new AuthenticatedUser(principal.getAttribute("preferred_username"));
        return ResponseEntity.ok(authenticatedUser);
    }
}
